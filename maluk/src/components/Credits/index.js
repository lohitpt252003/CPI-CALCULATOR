import React from 'react';
import './index.css';

const Credits = () => {
    const developers = [
        {
            name: "Lohit P Talavar",
            role: "Full Stack Developer",
            github: "https://github.com/lohitpt252003",
            linkedin: "https://www.linkedin.com/in/lohit-talavar-a73926247/"
        },
        {
            name: "Maluk Chand",
            role: "Full Stack Developer",
            github: "https://github.com/Malukchand",
            linkedin: "https://www.linkedin.com/in/maluk-chand-6440202a1/"
        }
    ];

    return (
        <div className="credits-container">
            <div className="credits-card">
                <h2>Credits</h2>

                <div className="developers-grid">
                    {developers.map((dev, index) => (
                        <div key={index} className="developer-info">
                            <div className="avatar">👨‍💻</div>
                            <h1 className="dev-name">{dev.name}</h1>
                            <p className="dev-role">{dev.role}</p>

                            <div className="social-links">
                                <a href={dev.github} target="_blank" rel="noopener noreferrer" className="social-btn github">
                                    GitHub
                                </a>
                                <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="project-info">
                    <h3>About the Project</h3>
                    <p>
                        This SPI & CPI Calculator was built to help students easily track their academic performance.
                        It features dual calculation modes, theme switching, and persistent data storage.
                    </p>
                    <p className="version">Version 1.0.0</p>
                </div>
            </div>
        </div>
    );
};

export default Credits;
