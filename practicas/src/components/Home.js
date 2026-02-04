import React from 'react';
import { Link } from 'react-router-dom';
import { getAllLanguages } from '../data/exercises';
import './Home.css';

function Home() {
  const languages = getAllLanguages();

  return (
    <div className="home">
      <section className="hero">
        <h1>Practica para tus Entrevistas Técnicas</h1>
        <p>
          Ejercicios de programación en múltiples lenguajes con soluciones explicadas 
          y un editor integrado para practicar en tiempo real.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">{languages.length}</span>
            <span className="stat-label">Lenguajes</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {languages.reduce((acc, lang) => acc + lang.exercises.length, 0)}
            </span>
            <span className="stat-label">Ejercicios</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Práctica</span>
          </div>
        </div>
      </section>

      <section className="languages-section">
        <h2>Selecciona un Lenguaje</h2>
        <div className="languages-grid">
          {languages.map((lang) => (
            <Link 
              to={`/language/${lang.id}`} 
              key={lang.id}
              className="language-card"
              style={{ '--accent-color': lang.color }}
            >
              <div className="language-icon">
                {typeof lang.icon === 'string' && lang.icon.length <= 2 ? (
                  lang.icon
                ) : (
                  <img src={lang.icon} alt={lang.name} />
                )}
              </div>
              <div className="language-info">
                <h3>{lang.name}</h3>
                <p>{lang.exercises.length} ejercicios</p>
              </div>
              <div className="language-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Características</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Ejercicios Reales</h3>
            <p>Problemas típicos de entrevistas en las mejores empresas tech.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Pistas y Soluciones</h3>
            <p>Cada ejercicio incluye pistas y la solución completa explicada.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Ejecuta tu Código</h3>
            <p>Editor integrado con compilación en línea para probar tus soluciones.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Niveles de Dificultad</h3>
            <p>Desde principiante hasta avanzado, progresa a tu ritmo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
