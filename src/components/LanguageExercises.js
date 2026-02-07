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
      </div>
    );
  }

  const getDifficultyClass = (difficulty) => {
    const map = {
      'Easy': 'easy',
      'Medium': 'medium',
      'Hard': 'hard'
    };
    return map[difficulty] || 'medium';
  };

  const getLanguageGradient = () => {
    const color = language.color || '#39c5cf';
    return `linear-gradient(135deg, 
      ${color}10 0%, 
      #1a1a1a 50%, 
      ${color}05 100%)`;
  };

  return (
    <div
      className={`language-exercises language-${languageId}`}
      style={{
        '--language-color': language.color,
        '--language-color-light': language.color + '33',
        '--language-color-medium': language.color + '66',
        '--language-color-dark': language.color + '99',
        '--language-gradient': getLanguageGradient(),
        '--text-primary': '#fff',
        '--text-secondary': '#e0e0e0'
      }}
    >
      <Link to="/" className="back-link">Volver</Link>

      <div className="language-header">
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
        {[...language.exercises]
          .sort((a, b) => {
            const order = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            return order[a.difficulty] - order[b.difficulty];
          })
          .map((exercise, idx) => (
            <Link
              to={`/language/${languageId}/exercise/${exercise.id}`}
              key={exercise.id}
              className="exercise-card"
            >
              <div className="exercise-number">#{idx + 1}</div>
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