import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LanguageExercises from './components/LanguageExercises';
import Exercise from './components/Exercise';
import mainLogo from './assets/images/main-logo.png';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Router>
        <header className="app-header">
          <a href="/" className="logo">
            <img src={mainLogo} alt="CodePractice Logo" className="logo-img" />
          </a>
          <nav className="header-nav">
            <a href="/">Inicio</a>
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/language/:languageId" element={<LanguageExercises />} />
            <Route path="/language/:languageId/exercise/:exerciseId" element={<Exercise />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>Practica para tus entrevistas de trabajo</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
