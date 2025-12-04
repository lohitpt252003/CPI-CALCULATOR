import React, { useState, useEffect } from 'react';
import './index.css';
import './light.css';
import './dark.css';

const SPICalculator = () => {
    const [subjects, setSubjects] = useState([{ id: 1, name: '', credit: '', grade: '10' }]);
    const [spi, setSpi] = useState(null);
    const [theme, setTheme] = useState('light');

    const gradePoints = {
        '10': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '0': 0
    };

    const handleAddSubject = () => {
        setSubjects([...subjects, { id: subjects.length + 1, name: '', credit: '', grade: '10' }]);
    };

    const handleRemoveSubject = (id) => {
        setSubjects(subjects.filter(sub => sub.id !== id));
    };

    const handleChange = (id, field, value) => {
        const newSubjects = subjects.map(sub =>
            sub.id === id ? { ...sub, [field]: value } : sub
        );
        setSubjects(newSubjects);
    };

    const calculateSPI = () => {
        let totalCredits = 0;
        let totalPoints = 0;

        subjects.forEach(sub => {
            const credit = parseFloat(sub.credit);
            const points = gradePoints[sub.grade];

            if (!isNaN(credit) && points !== undefined) {
                totalCredits += credit;
                totalPoints += credit * points;
            }
        });

        if (totalCredits === 0) {
            setSpi(0);
        } else {
            setSpi((totalPoints / totalCredits).toFixed(2));
        }
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`spi-calculator-container ${theme}-theme`}>
            <div className="header">
                <h2>SPI Calculator</h2>
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
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
                        />
                        <select
                            value={sub.grade}
                            onChange={(e) => handleChange(sub.id, 'grade', e.target.value)}
                            className="select-grade"
                        >
                            <option value="10">O (10)</option>
                            <option value="9">A+ (9)</option>
                            <option value="8">A (8)</option>
                            <option value="7">B+ (7)</option>
                            <option value="6">B (6)</option>
                            <option value="5">C (5)</option>
                            <option value="4">P (4)</option>
                            <option value="0">F (0)</option>
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
