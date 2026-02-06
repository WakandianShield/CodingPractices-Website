import React, { useState, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { getLanguageById } from '../data/exercises';
import './Exercise.css';

// Mapeo de lenguajes para Monaco Editor
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

// Mapeo para Piston API
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
  const [activeTab, setActiveTab] = useState('code');

  const handleEditorChange = useCallback((value) => {
    setCode(value || '');
  }, []);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Ejecutando código...\n');
    setActiveTab('output');

    // Para HTML/CSS, usar iframe
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
    <div className="exercise-page">
      <div className="exercise-header">
        <Link to={`/language/${languageId}`} className="back-link">
          ← {language.name}
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

      <div className="exercise-content">
        <div className="exercise-info">
          <div className="exercise-title-row">
            <h1>{exercise.title}</h1>
            <span className={`difficulty-badge ${exercise.difficulty.toLowerCase()}`}>
              {exercise.difficulty}
            </span>
          </div>
          <p className="exercise-description">{exercise.description}</p>
          
          <div className="hints-section">
            <button 
              className="hints-toggle"
              onClick={() => setShowHints(!showHints)}
            >
               {showHints ? 'Ocultar' : 'Mostrar'} Pistas ({exercise.hints?.length || 0})
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

        <div className="editor-section">
          <div className="editor-toolbar">
            <div className="toolbar-tabs">
              <button 
                className={`tab ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                Código
              </button>
              <button 
                className={`tab ${activeTab === 'output' ? 'active' : ''}`}
                onClick={() => setActiveTab('output')}
              >
                Salida
              </button>
              {(languageId === 'html' || languageId === 'css') && (
                <button 
                  className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('preview')}
                >
                  Vista Previa
                </button>
              )}
            </div>
            <div className="toolbar-actions">
              <button onClick={resetCode} className="action-btn reset">
                Reiniciar
              </button>
              <button onClick={loadSolution} className="action-btn solution">
                {showSolution ? '✓ Solución Cargada' : 'Ver Solución'}
              </button>
              <button 
                onClick={runCode} 
                disabled={isRunning}
                className="action-btn run"
              >
                {isRunning ? 'Ejecutando...' : '▶Ejecutar'}
              </button>
            </div>
          </div>

          <div className="editor-container">
            {activeTab === 'code' && (
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
            )}
            
            {activeTab === 'output' && (
              <div className="output-panel">
                <pre>{output || 'Ejecuta el código para ver la salida aquí...'}</pre>
              </div>
            )}
            
            {activeTab === 'preview' && (languageId === 'html' || languageId === 'css') && (
              <div className="preview-panel">
                <iframe
                  title="Preview"
                  srcDoc={languageId === 'html' ? code : `<style>${code}</style><div class="demo">Demo Content</div>`}
                  sandbox="allow-scripts"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
