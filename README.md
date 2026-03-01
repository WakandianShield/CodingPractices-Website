<h1 align="center">CodingPractices Website</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=plastic" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=plastic" />
  <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=plastic" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=plastic" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white&style=plastic" />
</p>

<p align="center">
  A videogame-inspired coding practice platform built with React where you can sharpen your programming skills across multiple languages.
  Choose a language, pick a difficulty, read the instructions, write your code in the built-in editor, compile it, and unlock hints if you get stuck.
</p>

<h2 align="center">Overview</h2>

<p align="center">
  CodingPractices is an interactive web application designed to make learning and practicing programming fun and engaging.
  Taking inspiration from videogame aesthetics, the platform offers structured exercises across 8 programming languages,
  each categorized into Easy, Medium, and Hard difficulty levels. Every exercise comes with clear instructions,
  an embedded IDE-style code editor where you can write and compile your solution, and a hint system to guide you
  when you're stuck — all wrapped in a unique visual experience.
</p>

<h2 align="center">Features</h2>

<div>
  <ul>
    <li><b>Videogame-inspired UI</b> — Unique visual design with a gaming aesthetic</li>
    <li><b>8 Languages Supported</b> — Python, JavaScript, Java, C#, C++, React, HTML, and CSS</li>
    <li><b>3 Difficulty Levels</b> — Easy, Medium, and Hard exercises per language</li>
    <li><b>Built-in Code Editor</b> — IDE-style editor to write your solution directly in the browser</li>
    <li><b>Code Compilation</b> — Run and test your code without leaving the page</li>
    <li><b>Hint System</b> — Unlock hints inside each exercise when you get stuck</li>
    <li><b>File Explorer</b> — Navigate exercises with a familiar file-tree interface</li>
    <li><b>Scroll to Top</b> — Smooth navigation utility across all pages</li>
  </ul>
</div>

<h2 align="center">Tech Stack</h2>

<div>
  <ul>
    <li><b>Framework:</b> React 18</li>
    <li><b>Language:</b> JavaScript (ES6+)</li>
    <li><b>Styling:</b> CSS3 (component-scoped stylesheets)</li>
    <li><b>Code Editor:</b> Embedded IDE component (EditorIDE)</li>
    <li><b>Routing:</b> React Router DOM</li>
    <li><b>Package Manager:</b> npm</li>
    <li><b>Bundler:</b> Create React App (Webpack)</li>
  </ul>
</div>

<h2 align="center">System Requirements</h2>

<h3 align="center">Make sure you have installed</h3>

<div>
  <ul>
    <li><a href="https://git-scm.com/">Git</a></li>
    <li><a href="https://nodejs.org/">Node.js 18.0</a> or higher</li>
    <li><a href="https://www.npmjs.com/">npm 9.0</a> or higher (comes with Node.js)</li>
    <li>Any modern browser — Chrome, Firefox, Edge, or Safari</li>
  </ul>
</div>

<h3 align="center">Verify Installations</h3>

```bash
# Verify Node.js (Should display: 18.x or higher)
node --version
```
```bash
# Verify npm
npm --version
```
```bash
# Verify Git
git --version
```

<h2 align="center">Installation</h2>

<h3 align="center">1. Clone the Repository</h3>

```bash
git clone https://github.com/WakandianShield/CodingPractices-Website.git
```
```bash
cd CodingPractices-Website
```

<h3 align="center">2. Install Dependencies</h3>

```bash
npm install
```

<h2 align="center">Database Configuration</h2>

<p align="center">
  This project does not use an external database. All exercise data is managed locally through the
  <code>src/data/exercises.js</code> file, which contains the exercise definitions, instructions, difficulty levels,
  and hints for all supported languages. No additional configuration is required.
</p>

<h2 align="center">How to Run</h2>

<div>
  <ol>
    <li>Make sure all dependencies are installed (<code>npm install</code>)</li>
    <li>Start the development server:</li>
  </ol>
</div>

```bash
npm start
```

<p align="center">
  The app will open automatically at <b>http://localhost:3000</b> in your browser.
</p>

<h3 align="center">Other Available Scripts</h3>

```bash
# Build for production
npm run build
```
```bash
# Run tests
npm test
```

<h2 align="center">Project Structure</h2>

```
CodingPractices-Website/
│
├── public/
│   ├── index.html                  # App HTML entry point
│   ├── manifest.json               # PWA manifest
│   └── favicon.ico                 # App icon
│
├── src/
│   │
│   ├── assets/
│   │   ├── fonts/                  # Custom videogame-style fonts
│   │   └── images/                 # UI images and icons
│   │
│   ├── components/
│   │   ├── Home.js                 # Landing / home page
│   │   ├── Home.css                # Home page styles
│   │   ├── LanguageExercises.js    # Language selection & exercise listing
│   │   ├── LanguageExercises.css   # Language page styles
│   │   ├── Exercise.js             # Individual exercise view with editor & hints
│   │   ├── Exercise.css            # Exercise page styles
│   │   ├── EditorIDE.js            # Embedded code editor component
│   │   ├── FileExplorer.js         # File-tree navigation component
│   │   ├── ScrollToTop.js          # Scroll utility component
│   │   └── fnaf-font.css           # Videogame font stylesheet
│   │
│   ├── data/
│   │   └── exercises.js            # All exercises, instructions, and hints
│   │
│   ├── App.js                      # Root component and routing
│   ├── App.css                     # Global app styles
│   ├── index.js                    # React DOM entry point
│   └── index.css                   # Base global styles
│
├── package.json                    # Dependencies and scripts
└── README.md
```

<h2 align="center">Live Demo</h2>

<p align="center">
You can visit the live website
<a href="https://codingpracticesws.netlify.app/">
<b>here</b>
</a>
</p>

<p align="center">
  <img width="70%" alt="image" src="https://github.com/user-attachments/assets/71eeee09-9cb7-4dfd-ae1f-1c2a9dd43797" />
</p>

<h2 align="center">Contact</h2>

<p align="center">
  If you would like to provide feedback or share ideas, you can contact me through my GitHub profile or social media.
  <br><br>
  <b>Note:</b> Some files contain explanatory information in Spanish.
</p>
