import React, { useState } from 'react';
import './index.css';
import './light.css';
import './dark.css';

const CPICalculator = () => {
    const [isRepeated, setIsRepeated] = useState(true); // Default to repeated (current method)
    const [courses, setCourses] = useState([{ id: 1, name: '', credit: '', grade: 'A' }]);
    const [semesters, setSemesters] = useState([{ id: 1, spi: '', credit: '' }]);
    const [cpi, setCpi] = useState(null);
    const [theme, setTheme] = useState('light');

    const gradePoints = {
        'A*': 10, 'A': 10, 'B+': 9, 'B': 8, 'C+': 7, 'C': 6, 'D+': 5, 'D': 4, 'E': 0, 'F': 0
    };

    // Course Handlers
    const handleAddCourse = () => {
        setCourses([...courses, { id: courses.length + 1, name: '', credit: '', grade: 'A' }]);
    };

    const handleRemoveCourse = (id) => {
        setCourses(courses.filter(course => course.id !== id));
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

    const handleCourseChange = (id, field, value) => {
        if (field === 'grade') {
            playAudio(value);
        }
        const newCourses = courses.map(course =>
            course.id === id ? { ...course, [field]: value } : course
        );
        setCourses(newCourses);
    };

    // Semester Handlers
    const handleAddSemester = () => {
        setSemesters([...semesters, { id: semesters.length + 1, spi: '', credit: '' }]);
    };

    const handleRemoveSemester = (id) => {
        setSemesters(semesters.filter(sem => sem.id !== id));
    };

    const handleSemesterChange = (id, field, value) => {
        const newSemesters = semesters.map(sem =>
            sem.id === id ? { ...sem, [field]: value } : sem
        );
        setSemesters(newSemesters);
    };

    const calculateCPI = () => {
        let totalCredits = 0;
        let totalPoints = 0;

        if (isRepeated) {
            // Course-based calculation
            courses.forEach(course => {
                const credit = parseFloat(course.credit);
                const points = gradePoints[course.grade];

                if (!isNaN(credit) && points !== undefined) {
                    totalCredits += credit;
                    totalPoints += credit * points;
                }
            });
        } else {
            // Semester-based calculation
            semesters.forEach(sem => {
                const spiVal = parseFloat(sem.spi);
                const creditVal = parseFloat(sem.credit);

                if (!isNaN(spiVal) && !isNaN(creditVal)) {
                    totalCredits += creditVal;
                    totalPoints += spiVal * creditVal;
                }
            });
        }

        if (totalCredits === 0) {
            setCpi(0);
        } else {
            setCpi((totalPoints / totalCredits).toFixed(2));
        }
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const handleClear = () => {
        setCourses([{ id: 1, name: '', credit: '', grade: 'A' }]);
        setSemesters([{ id: 1, spi: '', credit: '' }]);
        setCpi(null);
        localStorage.removeItem('cpi_courses');
        localStorage.removeItem('cpi_semesters');
        localStorage.removeItem('cpi_isRepeated');
    };

    return (
        <div className={`cpi-calculator-container ${theme}-theme`}>
            <div className="header">
                <h2>CPI Calculator</h2>
                <div className="header-controls">
                    <button onClick={handleClear} className="btn-clear">Clear Data</button>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>

            <div className="mode-toggle">
                <label className="toggle-label">
                    <input
                        type="checkbox"
                        checked={isRepeated}
                        onChange={(e) => {
                            setIsRepeated(e.target.checked);
                            setCpi(null); // Reset result on mode switch
                        }}
                    />
                    Have you repeated any course?
                </label>
            </div>

            <div className="semesters-list">
                {isRepeated ? (
                    // Course List
                    courses.map((course, index) => (
                        <div key={course.id} className="semester-row">
                            <input
                                type="text"
                                placeholder={`Course ${index + 1}`}
                                value={course.name}
                                onChange={(e) => handleCourseChange(course.id, 'name', e.target.value)}
                                className="input-name"
                            />
                            <input
                                type="number"
                                placeholder="Credits"
                                value={course.credit}
                                onChange={(e) => handleCourseChange(course.id, 'credit', e.target.value)}
                                className="input-credit"
                            />
                            <select
                                value={course.grade}
                                onChange={(e) => handleCourseChange(course.id, 'grade', e.target.value)}
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
                            {courses.length > 1 && (
                                <button onClick={() => handleRemoveCourse(course.id)} className="btn-remove">X</button>
                            )}
                        </div>
                    ))
                ) : (
                    // Semester List
                    semesters.map((sem, index) => (
                        <div key={sem.id} className="semester-row">
                            <span className="semester-label">Semester {index + 1}</span>
                            <input
                                type="number"
                                placeholder="SPI"
                                value={sem.spi}
                                onChange={(e) => handleSemesterChange(sem.id, 'spi', e.target.value)}
                                className="input-spi"
                                step="0.01"
                                min="0"
                                max="10"
                            />
                            <input
                                type="number"
                                placeholder="Credits"
                                value={sem.credit}
                                onChange={(e) => handleSemesterChange(sem.id, 'credit', e.target.value)}
                                className="input-credit"
                                min="0"
                            />
                            {semesters.length > 1 && (
                                <button onClick={() => handleRemoveSemester(sem.id)} className="btn-remove">X</button>
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className="actions">
                <button onClick={isRepeated ? handleAddCourse : handleAddSemester} className="btn-add">
                    {isRepeated ? '+ Add Course' : '+ Add Semester'}
                </button>
                <button onClick={calculateCPI} className="btn-calc">Calculate CPI</button>
            </div>

            {cpi !== null && (
                <div className="result">
                    <h3>Your CPI: <span className="cpi-value">{cpi}</span></h3>
                </div>
            )}
        </div>
    );
};

export default CPICalculator;
