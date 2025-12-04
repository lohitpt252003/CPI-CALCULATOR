import React, { useState, useEffect } from 'react';
import './index.css';
import './index.css';

const SPICalculator = () => {
    // Initialize state from localStorage if available
    const [subjects, setSubjects] = useState(() => {
        const savedSubjects = localStorage.getItem('spi_subjects');
        return savedSubjects ? JSON.parse(savedSubjects) : [{ id: 1, name: '', credit: '', grade: 'A' }];
    });
    const [spi, setSpi] = useState(null);

    // Save to localStorage whenever subjects change
    useEffect(() => {
        localStorage.setItem('spi_subjects', JSON.stringify(subjects));
    }, [subjects]);

    const gradePoints = {
        'A*': 10, 'A': 10, 'B+': 9, 'B': 8, 'C+': 7, 'C': 6, 'D+': 5, 'D': 4, 'E': 0, 'F': 0
    };

    const handleAddSubject = () => {
        setSubjects([...subjects, { id: subjects.length + 1, name: '', credit: '', grade: 'A' }]);
    };

    const handleRemoveSubject = (id) => {
        setSubjects(subjects.filter(sub => sub.id !== id));
    };

    const playAudio = (grade) => {
        let audioFile = null;
        if (grade === 'E') {
            audioFile = '/audio/song_for_e.mpeg';
        } else if (grade === 'F') {
            audioFile = '/audio/song_for_f.mpeg';
        } else if (grade === 'A' || grade === 'A*') {
            audioFile = '/audio/song_for_a.mp3';
        }

        if (audioFile) {
            const audio = new Audio(audioFile);
            audio.play().catch(e => console.log("Audio play failed", e));
        }
    };

    const handleChange = (id, field, value) => {
        if (field === 'grade') {
            playAudio(value);
        }
        if (field === 'credit' && value < 0) {
            return; // Prevent negative values
        }
        const newSubjects = subjects.map(sub =>
            sub.id === id ? { ...sub, [field]: value } : sub
        );
        setSubjects(newSubjects);
    };

    const calculateSPI = () => {
        let totalCredits = 0;
        let totalPoints = 0;
        let hasError = false;

        for (const sub of subjects) {
            if (!sub.credit || isNaN(parseFloat(sub.credit)) || parseFloat(sub.credit) <= 0) {
                alert(`Please enter a valid positive credit for subject ${sub.name || '#' + sub.id}`);
                hasError = true;
                break;
            }

            const credit = parseFloat(sub.credit);
            const points = gradePoints[sub.grade];

            if (!isNaN(credit) && points !== undefined) {
                totalCredits += credit;
                totalPoints += credit * points;
            }
        }

        if (hasError) return;

        if (totalCredits === 0) {
            setSpi(0);
        } else {
            setSpi((totalPoints / totalCredits).toFixed(2));
        }
    };

    const handleClear = () => {
        setSubjects([{ id: 1, name: '', credit: '', grade: 'A' }]);
        setSpi(null);
        localStorage.removeItem('spi_subjects');
    };

    return (
        <div className="spi-calculator-container">
            <div className="header">
                <h2>SPI Calculator</h2>
                <div className="header-controls">
                    <button onClick={handleClear} className="btn-clear">Clear Data</button>
                </div>
            </div>

            <div className="subjects-list">
                {subjects.map((sub, index) => (
                    <div key={sub.id} className="subject-row">
                        <input
                            type="text"
                            placeholder={`Subject ${index + 1}`}
                            value={sub.name}
                            onChange={(e) => handleChange(sub.id, 'name', e.target.value)}
                            className="input-name"
                        />
                        <input
                            type="number"
                            placeholder="Credits"
                            value={sub.credit}
                            onChange={(e) => handleChange(sub.id, 'credit', e.target.value)}
                            className="input-credit"
                            min="0"
                        />
                        <select
                            value={sub.grade}
                            onChange={(e) => handleChange(sub.id, 'grade', e.target.value)}
                            className="select-grade"
                        >
                            <option value="A*">A* (10)</option>
                            <option value="A">A (10)</option>
                            <option value="B+">B+ (9)</option>
                            <option value="B">B (8)</option>
                            <option value="C+">C+ (7)</option>
                            <option value="C">C (6)</option>
                            <option value="D+">D+ (5)</option>
                            <option value="D">D (4)</option>
                            <option value="E">E (0)</option>
                            <option value="F">F (0)</option>
                        </select>
                        {subjects.length > 1 && (
                            <button onClick={() => handleRemoveSubject(sub.id)} className="btn-remove">X</button>
                        )}
                    </div>
                ))}
            </div>

            <div className="actions">
                <button onClick={handleAddSubject} className="btn-add">+ Add Subject</button>
                <button onClick={calculateSPI} className="btn-calc">Calculate SPI</button>
            </div>

            {spi !== null && (
                <div className="result">
                    <h3>Your SPI: <span className="spi-value">{spi}</span></h3>
                </div>
            )}
        </div>
    );
};

export default SPICalculator;
