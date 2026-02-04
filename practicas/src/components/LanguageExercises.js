import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLanguageById } from '../data/exercises';
import './LanguageExercises.css';

function LanguageExercises() {
  const { languageId } = useParams();
  const language = getLanguageById(languageId);

  if (!language) {
    return (
      <div className="not-found">
        <h1>Lenguaje no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const getDifficultyClass = (difficulty) => {
    const map = {
      'Fácil': 'easy',
      'Medio': 'medium',
      'Difícil': 'hard'
    };
    return map[difficulty] || 'medium';
  };

  return (
    <div className="language-exercises">
      <div className="language-header" style={{ '--accent-color': language.color }}>
        <Link to="/" className="back-link">← Volver</Link>
        <div className="language-title">
          <span className="lang-icon">
            {typeof language.icon === 'string' && language.icon.length <= 2 ? (
              language.icon
            ) : (
              <img src={language.icon} alt={language.name} />
            )}
          </span>
          <h1>{language.name}</h1>
        </div>
        <p>{language.exercises.length} ejercicios disponibles</p>
      </div>

      <div className="exercises-list">
        {language.exercises.map((exercise) => (
          <Link
            to={`/language/${languageId}/exercise/${exercise.id}`}
            key={exercise.id}
            className="exercise-card"
          >
            <div className="exercise-number">#{exercise.id}</div>
            <div className="exercise-content">
              <h3>{exercise.title}</h3>
              <p>{exercise.description.substring(0, 100)}...</p>
            </div>
            <div className={`exercise-difficulty ${getDifficultyClass(exercise.difficulty)}`}>
              {exercise.difficulty}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LanguageExercises;
