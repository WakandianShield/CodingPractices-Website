import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LanguageExercises from './components/LanguageExercises';
import Exercise from './components/Exercise';
import ScrollToTop from './components/ScrollToTop';
import mainLogo from './assets/images/main-logo.png';
import './App.css';

function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={`app ${lightMode ? 'light' : ''}`}>
      <Router>
        <ScrollToTop />
        <header className="app-header">
          <a href="/" className="logo">
            <img src={mainLogo} alt="CodePractice Logo" className="logo-img" />
          </a>
          <nav className="header-nav">
            <a href="/">Home</a>
            <a href="#careers">Careers</a>
            <a href="#languages">Languages</a>
            <a href="#community">Community</a>
            <a href="#help">Help</a>
            <button 
              className="theme-toggle"
              onClick={() => setLightMode(!lightMode)}
              aria-label="Toggle theme"
            >
              {lightMode ? '🌙' : '☀️'}
            </button>
            <button 
              className="login-btn"
              aria-label='Log In'      
              >
                👤
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
