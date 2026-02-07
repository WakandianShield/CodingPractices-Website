import React, { useState, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { getLanguageById } from '../data/exercises';
import './Exercise.css';

const languageMap = {
  python: 'python',
  javascript: 'javascript',
  java: 'java',
  csharp: 'csharp',
  cpp: 'cpp',
  react: 'javascript',
  html: 'html',
  css: 'css'
};

const pistonLanguageMap = {
  python: { language: 'python', version: '3.10.0' },
  javascript: { language: 'javascript', version: '18.15.0' },
  java: { language: 'java', version: '15.0.2' },
  csharp: { language: 'csharp', version: '6.12.0' },
  cpp: { language: 'c++', version: '10.2.0' },
  react: { language: 'javascript', version: '18.15.0' },
  html: null, // HTML se ejecuta en iframe
  css: null   // CSS se ejecuta en iframe
};

function Exercise() {
  const { languageId, exerciseId } = useParams();
  const navigate = useNavigate();
  const language = getLanguageById(languageId);
  
  const exercise = language?.exercises.find(e => e.id === parseInt(exerciseId));
  
  const [code, setCode] = useState(exercise?.starterCode || '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const getLanguageGradient = () => {
    if (!language?.color) return 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d1a24 100%)';
    const color = language.color;
    return `linear-gradient(135deg, 
      ${color}10 0%, 
      #1a1a1a 50%, 
      ${color}05 100%)`;
  };

  const handleEditorChange = useCallback((value) => {
    setCode(value || '');
  }, []);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Ejecutando código...\n');

    if (languageId === 'html' || languageId === 'css') {
      setOutput('Vista previa disponible abajo');
      setIsRunning(false);
      return;
    }

    const pistonConfig = pistonLanguageMap[languageId];
    
    if (!pistonConfig) {
      setOutput('Este lenguaje no soporta ejecución directa.\nPuedes copiar el código y probarlo en tu IDE local.');
      setIsRunning(false);
      return;
    }

    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: pistonConfig.language,
          version: pistonConfig.version,
          files: [
            {
              name: `main.${getFileExtension(languageId)}`,
              content: code
            }
          ]
        })
      });

      const result = await response.json();
      
      if (result.run) {
        const outputText = result.run.output || result.run.stderr || 'Sin salida';
        setOutput(outputText);
      } else if (result.message) {
        setOutput(`Error: ${result.message}`);
      } else {
        setOutput('Error al ejecutar el código');
      }
    } catch (error) {
      setOutput(`Error de conexión: ${error.message}\n\nPrueba el código en tu IDE local.`);
    }

    setIsRunning(false);
  };

  const getFileExtension = (lang) => {
    const extensions = {
      python: 'py',
      javascript: 'js',
      java: 'java',
      csharp: 'cs',
      cpp: 'cpp'
    };
    return extensions[lang] || 'txt';
  };

  const resetCode = () => {
    setCode(exercise?.starterCode || '');
    setOutput('');
    setShowSolution(false);
  };

  const loadSolution = () => {
    setCode(exercise?.solution || '');
    setShowSolution(true);
  };

  const goToExercise = (direction) => {
    const currentIndex = language.exercises.findIndex(e => e.id === parseInt(exerciseId));
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < language.exercises.length) {
      const newExercise = language.exercises[newIndex];
      navigate(`/language/${languageId}/exercise/${newExercise.id}`);
      setCode(newExercise.starterCode);
      setOutput('');
      setShowSolution(false);
      setShowHints(false);
    }
  };

  if (!language || !exercise) {
    return (
      <div className="not-found">
        <h1>Ejercicio no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const currentIndex = language.exercises.findIndex(e => e.id === parseInt(exerciseId));
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < language.exercises.length - 1;

  return (
    <div 
      className={`exercise-page language-${languageId}`}
      style={{ 
        '--language-color': language.color,
        '--language-color-light': language.color + '33',
        '--language-color-medium': language.color + '66',
        '--language-color-dark': language.color + '99',
        '--language-gradient': getLanguageGradient()
      }}
    >
      <div className="exercise-header">
        <div className="header-top-row">
          <Link to={`/language/${languageId}`} className="back-link">
            Volver a {language.name}
          </Link>
          <div className="exercise-nav">
            <button 
              onClick={() => goToExercise(-1)} 
              disabled={!hasPrev}
              className="nav-btn"
            >
              ← Anterior
            </button>
            <span className="exercise-counter">
              {currentIndex + 1} / {language.exercises.length}
            </span>
            <button 
              onClick={() => goToExercise(1)} 
              disabled={!hasNext}
              className="nav-btn"
            >
              Siguiente →
            </button>
          </div>
        </div>

        <div className="exercise-info-header">
          <h1>{exercise.title}</h1>
          <span className={`difficulty-badge ${exercise.difficulty.toLowerCase()}`}>
            {exercise.difficulty}
          </span>
        </div>
      </div>

      <div className="exercise-content">
        {/* Columna 1: Instrucciones y pistas */}
        <div className="instruction-column">
          <div className="exercise-info">
            <div className="instructions-section">
              <h3 className="section-title">Descripción</h3>
              <div className="exercise-description">
                {exercise.description}
              </div>
            </div>
            
            <div className="hints-section">
              <h3 className="section-title">Pistas ({exercise.hints?.length || 0})</h3>
              <button 
                className="hints-toggle"
                onClick={() => setShowHints(!showHints)}
              >
                {showHints ? 'Ocultar Pistas' : 'Mostrar Pistas'}
              </button>
              {showHints && (
                <ul className="hints-list">
                  {exercise.hints?.map((hint, index) => (
                    <li key={index}>{hint}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Columna 2: Editor de código */}
        <div className="code-column">
          <div className="editor-section">
            <div className="editor-toolbar">
              <div className="toolbar-actions">
                <button onClick={resetCode} className="action-btn reset">
                  ↺ Reiniciar
                </button>
                <button onClick={loadSolution} className="action-btn solution">
                  {showSolution ? 'Solución' : 'Ver Solución'}
                </button>
                <button 
                  onClick={runCode} 
                  disabled={isRunning}
                  className="action-btn run"
                >
                  {isRunning ? 'Ejecutando...' : '▶ Ejecutar Código'}
                </button>
              </div>
            </div>

            <div className="editor-container">
              <Editor
                height="100%"
                language={languageMap[languageId] || 'plaintext'}
                value={code}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: 'on'
                }}
              />
            </div>
          </div>
        </div>

        {/* Columna 3: Salida y resultados */}
        <div className="output-column">
          <div className="output-section">
            <div className="output-header">
              <h3 className="section-title">Resultados</h3>
            </div>
            
            <div className="output-container">
              <div className="output-content">
                <pre>{output || 'Ejecuta el código para ver los resultados aquí...'}</pre>
              </div>
            </div>

            {/* Preview para HTML/CSS */}
            {(languageId === 'html' || languageId === 'css') && (
              <div className="preview-section">
                <h3 className="section-title">Vista Previa</h3>
                <div className="preview-container">
                  <iframe
                    title="Preview"
                    srcDoc={languageId === 'html' ? code : `<style>${code}</style><div class="demo">Demo Content</div>`}
                    sandbox="allow-scripts"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;