import React from 'react';
import './index.css';

const HowToUse = () => {
    return (
        <div className="how-to-use-container">
            <h2>How to Use</h2>

            <div className="section">
                <h3>📊 SPI Calculator</h3>
                <p>Calculate your Semester Performance Index easily.</p>
                <ul>
                    <li><strong>Add Subject:</strong> Click "+ Add Subject" to add more rows.</li>
                    <li><strong>Enter Details:</strong> Fill in the Subject Name, Credits, and select your Grade.</li>
                    <li><strong>Calculate:</strong> Click "Calculate SPI" to see your result.</li>
                </ul>
            </div>

            <div className="section">
                <h3>📈 CPI Calculator</h3>
                <p>Calculate your Cumulative Performance Index with two modes.</p>

                <div className="subsection">
                    <h4>Mode 1: Repeated Courses (Default)</h4>
                    <p>Use this if you have repeated any courses.</p>
                    <ul>
                        <li>Ensure "Have you repeated any course?" is <strong>checked</strong>.</li>
                        <li>Enter individual <strong>Course Name</strong>, <strong>Credits</strong>, and <strong>Grade</strong>.</li>
                        <li>The calculator uses (Credits × Grade Points) logic.</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h4>Mode 2: Semester-wise</h4>
                    <p>Use this for standard calculation if you haven't repeated courses.</p>
                    <ul>
                        <li>Uncheck "Have you repeated any course?".</li>
                        <li>Enter <strong>SPI</strong> and <strong>Credits</strong> for each semester.</li>
                        <li>The calculator uses (SPI × Credits) logic.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <h3>✨ Special Features</h3>
                <ul>
                    <li><strong>💾 Auto-Save:</strong> Your data is saved automatically. Refreshing the page won't lose your work!</li>
                    <li><strong>🗑️ Clear Data:</strong> Use the "Clear Data" button to reset everything and start fresh.</li>
                    <li><strong>🌗 Theme:</strong> Toggle between Dark and Light mode for comfort.</li>
                    <li><strong>🎵 Surprise:</strong> Try selecting Grade 'E' or 'F' for a little audio surprise!</li>
                </ul>
            </div>
        </div>
    );
};

export default HowToUse;
