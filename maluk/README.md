# IITK CPI SPI Calculator

A comprehensive React application for calculating Semester Performance Index (SPI) and Cumulative Performance Index (CPI). Designed with a clean UI, dark/light mode support, and persistent data storage.

## Features

### 📊 SPI Calculator
- **Subject-wise Entry**: Add subjects with their names, credits, and grades.
- **Grade Points**: Supports standard grading (A*, A, B+, etc.).
- **Real-time Calculation**: Instantly calculates your SPI.

### 📈 CPI Calculator
- **Dual Modes**:
    - **Repeated Course Mode**: Enter individual courses (Credits & Grade) to handle repeated courses correctly.
    - **Semester Mode**: Enter semester details (SPI & Credits) for quick calculation.
- **Toggle Switch**: Easily switch between modes based on your needs.

### 🎨 User Experience
- **Global Theme Toggle**: Seamlessly switch between dark and light modes from the navigation bar. Your preference persists across all pages!
- **Input Validation**: Smart validation ensures you only enter valid, positive credit values.
- **Responsive Design**: Fully optimized for mobile and desktop devices.
- **Data Persistence**: Your data is automatically saved to your browser's LocalStorage. Refreshing the page won't lose your work!
- **Clear Data**: One-click reset button to wipe data and start fresh.
- **Funny Audio Feedback**: Select Grade 'E' or 'F' for a surprise audio cue! 🎵

## How to Run

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/lohitpt252003/CPI-CALCULATOR.git
    cd CPI-CALCULATOR/maluk
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the application**:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

-   `src/components/SPICalculator`: Contains logic and styles for the SPI Calculator.
-   `src/components/CPICalculator`: Contains logic and styles for the CPI Calculator.
-   `public/audio`: Contains audio files for the funny feedback feature.

## Contributing

Feel free to fork this project and submit pull requests!
