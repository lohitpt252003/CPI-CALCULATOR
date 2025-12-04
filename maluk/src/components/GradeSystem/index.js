import React from 'react';
import './index.css';

const GradeSystem = () => {
    const grades = [
        { grade: 'A*', points: 10, description: 'Outstanding' },
        { grade: 'A', points: 10, description: 'Excellent' },
        { grade: 'B+', points: 9, description: 'Very Good' },
        { grade: 'B', points: 8, description: 'Good' },
        { grade: 'C+', points: 7, description: 'Fair' },
        { grade: 'C', points: 6, description: 'Average' },
        { grade: 'D+', points: 5, description: 'Below Average' },
        { grade: 'D', points: 4, description: 'Marginal' },
        { grade: 'E', points: 0, description: 'Poor' },
        { grade: 'F', points: 0, description: 'Fail' },
    ];

    return (
        <div className="grade-system-container">
            <h2>Grading System</h2>
            <div className="table-wrapper">
                <table className="grade-table">
                    <thead>
                        <tr>
                            <th>Grade</th>
                            <th>Points</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index} className={`row-${item.grade.replace('*', 'star').replace('+', 'plus')}`}>
                                <td className="grade-cell">{item.grade}</td>
                                <td className="points-cell">{item.points}</td>
                                <td className="desc-cell">{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GradeSystem;
