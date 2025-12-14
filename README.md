# Connect Four - WBE Final Project

A complete Connect Four game for WBE Practical Exercises 8-12.

## How to Start

1. **Install dependencies:**
```bash
npm install
Start the server:

bash
node index.js
Open in browser:

Game: http://localhost:3000/connect4.html

Documentation: http://localhost:3000/documentation.html

How to Play
Click on any column to drop your piece

Connect four in a row (horizontal, vertical, or diagonal) to win

Blue starts first

Use Undo button to take back moves

Save/Load your game

Fullscreen Mode
Press F11 (Windows/Linux) or Control+Command+F (Mac)

Project Structure
text
├── index.js                   # Server
├── package.json               # Dependencies
├── public/
│   ├── connect4.html          # Game
│   ├── styles.css             # Styles
│   └── documentation.html     # Documentation
└── README.md                  # This file
Quick Troubleshooting
If port 3000 is busy: taskkill /f /im node.exe (Windows) or pkill -f node (Mac/Linux)

If modules missing: npm install express

Developed for WBE Practical Exercises 8-12.