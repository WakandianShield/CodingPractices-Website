import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { getLanguageById } from '../data/exercises';
import './Exercise.css';
import { FaFile, FaHtml5, FaCss3Alt, FaReact, FaJs, FaPlus, FaTrash, FaFolder } from 'react-icons/fa';

const languageMap = {
  python: 'python',
  javascript: 'javascript',
  java: 'java',
  csharp: 'csharp',
  cpp: 'cpp',
  react: 'javascript',
  html: 'html',
  css: 'css',
  jsx: 'javascript'
};

const pistonLanguageMap = {
  python: { language: 'python', version: '3.10.0' },
  javascript: { language: 'javascript', version: '18.15.0' },
  java: { language: 'java', version: '15.0.2' },
  csharp: { language: 'csharp', version: '6.12.0' },
  cpp: { language: 'c++', version: '10.2.0' },
  react: { language: 'javascript', version: '18.15.0' },
  html: null,
  css: null
};

const initialFiles = {
  react: [
    {
      id: 'App.jsx',
      name: 'App.jsx',
      content: `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>Start editing to see changes</p>
    </div>
  );
}

export default App;`,
      type: 'jsx'
    },
    {
      id: 'App.css',
      name: 'App.css',
      content: `/* Estilos principales para React */
`,
      type: 'css'
    }
  ],
  html: [
    {
      id: 'index.html',
      name: 'index.html',
      content: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página HTML</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>`,
      type: 'html'
    },
    {
      id: 'style.css',
      name: 'style.css',
      content: `/* Estilos CSS para HTML */
* {

}

body {

}

`,
      type: 'css'
    },
    {
      id: 'script.js',
      name: 'script.js',
      content: ``,
      type: 'javascript'
    }
  ],
  css: [
    {
      id: 'index.html',
      name: 'index.html',
      content: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Demo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

</body>
</html>`,
      type: 'html'
    },
    {
      id: 'styles.css',
      name: 'styles.css',
      content: `/* Archivo principal de estilos CSS */
:root {
}

* {

}

body {

}`,
      type: 'css'
    }
  ]
};

function Exercise() {
  const { languageId, exerciseId } = useParams();
  const navigate = useNavigate();
  const language = getLanguageById(languageId);

  const sortedExercises = useMemo(() => {
    if (!language?.exercises) return [];
    return [...language.exercises].sort((a, b) => {
      const order = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
      return order[a.difficulty] - order[b.difficulty];
    });
  }, [language]);

  const exercise = sortedExercises.find(e => e.id === parseInt(exerciseId));

  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState('');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showFileExplorer, setShowFileExplorer] = useState(true);
  const [previewHtml, setPreviewHtml] = useState('');
  const [explorerWidth, setExplorerWidth] = useState(250);
  const [isResizing, setIsResizing] = useState(false);

  const explorerRef = useRef(null);
  const resizeRef = useRef(null);

const generatePreviewHtml = useCallback(() => {
  if (!(languageId === 'react' || languageId === 'html' || languageId === 'css')) {
    return '';
  }

  let htmlContent = '';
  let cssContent = '';
  let jsContent = '';

  files.forEach(file => {
    if (file.name.endsWith('.html') || file.type === 'html') {
      htmlContent = file.content;
    } else if (file.name.endsWith('.css') || file.type === 'css') {
      cssContent = file.content;
    } else if (file.name.endsWith('.js') || file.name.endsWith('.jsx') ||
      file.type === 'javascript' || file.type === 'jsx') {
      jsContent = file.content;
    }
  });

  if (languageId === 'react') {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React Preview</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: Arial, sans-serif; background: #1a1a1a; color: white; padding: 20px; }
      ${cssContent}
    </style>
</head>
<body>
    <div id="root"></div>
    
    <!-- Versión simplificada sin dependencias externas -->
    <script>
      // Parsear JSX básico a HTML
      const jsCode = \`${jsContent.replace(/`/g, '\\`')}\`;
      
      // Extraer el componente principal
      let appHtml = '';
      if (jsCode.includes('return (')) {
        const returnMatch = jsCode.match(/return \\(([\\s\\S]*?)\\)/);
        if (returnMatch) {
          appHtml = returnMatch[1]
            .replace(/className="/g, 'class="')
            .replace(/<div/g, '<div style="padding: 20px;"')
            .replace(/<h1/g, '<h1 style="color: #61dafb;"')
            .replace(/<p/g, '<p style="color: #ccc; font-size: 1.2rem;"');
        }
      }
      
      // Si no se pudo parsear, mostrar un demo
      if (!appHtml) {
        appHtml = '<div style="padding: 20px;"><h1 style="color: #61dafb;">Hello React!</h1><p style="color: #ccc;">Start editing App.jsx to see changes</p></div>';
      }
      
      document.getElementById('root').innerHTML = appHtml;
    </script>
</body>
</html>`;
  } else if (languageId === 'html') {
    return htmlContent || '<div>No HTML content available</div>';
  } else if (languageId === 'css') {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CSS Preview</title>
    <style>${cssContent}</style>
</head>
<body>

</body>
</html>`;
  }

  return '';
}, [files, languageId]);

  useEffect(() => {
    if (initialFiles[languageId]) {
      const initialFileList = initialFiles[languageId];
      setFiles(initialFileList);
      setActiveFile(initialFileList[0].id);
      setCode(initialFileList[0].content);
    } else {
      const starterCode = exercise?.starterCode || '';
      setFiles([{
        id: 'main',
        name: 'main',
        content: starterCode,
        type: languageId
      }]);
      setActiveFile('main');
      setCode(starterCode);
    }
  }, [languageId, exerciseId, exercise?.starterCode]);

  useEffect(() => {
    if (languageId === 'react' || languageId === 'html' || languageId === 'css') {
      const newPreviewHtml = generatePreviewHtml();
      setPreviewHtml(newPreviewHtml);
    }
  }, [files, languageId, generatePreviewHtml]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !explorerRef.current) return;

      const containerRect = explorerRef.current.parentElement.getBoundingClientRect();
      const newWidth = e.clientX - containerRect.left;

      if (newWidth >= 150 && newWidth <= 400) {
        setExplorerWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
    };
  }, [isResizing]);

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
    setFiles(prev => prev.map(file =>
      file.id === activeFile ? { ...file, content: value || '' } : file
    ));
  }, [activeFile]);

  const runCode = async () => {
    if (languageId === 'react' || languageId === 'html' || languageId === 'css') {
      setOutput('Usa la pestaña de Vista Previa para ver el resultado');
      setIsRunning(false);
      return;
    }

    setIsRunning(true);
    setOutput('Ejecutando código...\n');

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
      cpp: 'cpp',
      jsx: 'jsx'
    };
    return extensions[lang] || 'txt';
  };

  const resetCode = () => {
    if (initialFiles[languageId]) {
      const initialFileList = initialFiles[languageId];
      setFiles(initialFileList);
      setActiveFile(initialFileList[0].id);
      setCode(initialFileList[0].content);
    } else {
      const starterCode = exercise?.starterCode || '';
      const newFiles = [{
        id: 'main',
        name: 'main',
        content: starterCode,
        type: languageId
      }];
      setFiles(newFiles);
      setActiveFile('main');
      setCode(starterCode);
    }
    setOutput('');
    setShowSolution(false);
  };

  const loadSolution = () => {
    if (exercise?.solution) {
      const newFiles = [{
        id: 'main',
        name: 'main',
        content: exercise.solution,
        type: languageId
      }];
      setFiles(newFiles);
      setActiveFile('main');
      setCode(exercise.solution);
      setShowSolution(true);
    }
  };

  const goToExercise = (direction) => {
    const currentIndex = sortedExercises.findIndex(e => e.id === parseInt(exerciseId));
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < sortedExercises.length) {
      const newExercise = sortedExercises[newIndex];
      navigate(`/language/${languageId}/exercise/${newExercise.id}`);
      resetCode();
      setOutput('');
      setShowSolution(false);
      setShowHints(false);
    }
  };

  const handleFileSelect = (fileId) => {
    const file = files.find(f => f.id === fileId);
    if (file) {
      setActiveFile(fileId);
      setCode(file.content);
    }
  };

  const addNewFile = () => {
    const defaultNames = {
      react: 'Component.jsx',
      html: 'page.html',
      css: 'styles.css'
    };

    const fileName = prompt('Ingresa el nombre del archivo (con extensión):', defaultNames[languageId] || 'newfile.js');
    if (fileName) {
      const fileType = fileName.split('.').pop();
      const newFile = {
        id: fileName,
        name: fileName,
        content: getDefaultContent(fileType, languageId),
        type: fileType
      };
      setFiles([...files, newFile]);
      setActiveFile(fileName);
      setCode(newFile.content);
    }
  };

  const deleteFile = (fileId, e) => {
    if (e) e.stopPropagation();
    if (files.length <= 1) {
      alert('No se puede eliminar el último archivo');
      return;
    }
    const newFiles = files.filter(f => f.id !== fileId);
    setFiles(newFiles);
    if (activeFile === fileId) {
      setActiveFile(newFiles[0].id);
      setCode(newFiles[0].content);
    }
  };

  const getDefaultContent = (fileType, langId) => {
    switch (fileType) {
      case 'js':
      case 'jsx':
        if (langId === 'react') {
          return `import React from 'react';

function NewComponent() {
  return (
    <div>
      <h2>Nuevo Componente</h2>
      <p>Contenido del componente</p>
    </div>
  );
}

export default NewComponent;`;
        }
        return '// Nuevo archivo JavaScript\n';
      case 'html':
        return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Página</title>
</head>
<body>

</body>
</html>`;
      case 'css':
        return `/* Nuevo archivo CSS */
`;
      default:
        return `// Nuevo archivo ${fileType}`;
    }
  };

  const getFileIcon = (fileName) => {
    if (fileName.endsWith('.jsx')) return <FaReact color="#61DAFB" />;
    if (fileName.endsWith('.js')) return <FaJs color="#F7DF1E" />;
    if (fileName.endsWith('.html')) return <FaHtml5 color="#E34C26" />;
    if (fileName.endsWith('.css')) return <FaCss3Alt color="#1572B6" />;
    return <FaFile color="#888" />;
  };

  const getActiveFileType = () => {
    const activeFileObj = files.find(f => f.id === activeFile);
    if (!activeFileObj) return languageId;

    const extension = activeFileObj.name.split('.').pop();
    const typeMap = {
      'js': 'javascript',
      'jsx': 'javascript',
      'html': 'html',
      'css': 'css',
      'py': 'python',
      'java': 'java',
      'cs': 'csharp',
      'cpp': 'cpp'
    };

    return typeMap[extension] || languageId;
  };

  const startResizing = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  if (!language || !exercise) {
    return (
      <div className="not-found">
        <h1>Ejercicio no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const currentIndex = sortedExercises.findIndex(e => e.id === parseInt(exerciseId));
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sortedExercises.length - 1;
  const isWebLanguage = languageId === 'react' || languageId === 'html' || languageId === 'css';

  return (
    <div
      className={`exercise-page language-${languageId} ${isWebLanguage ? 'has-file-explorer' : ''}`}
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
            Volver
          </Link>
          <h1>{exercise.title}</h1>
          <img src={language.icon} alt={language.name} className="exercise-lang-icon" />
        </div>
      </div>

      <div className="exercise-content">
        <div className="instruction-column">
          <div className="exercise-info">
            <div className="instructions-section">
              <h3 className="section-title">Descripción</h3>
              <span className={`difficulty-badge ${exercise.difficulty.toLowerCase()}`}>
                {exercise.difficulty}
              </span>
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

            <div className="exercise-nav">
              <button
                onClick={() => goToExercise(-1)}
                disabled={!hasPrev}
                className="nav-btn"
              >
                ←
              </button>
              <span className="exercise-counter">
                {currentIndex + 1} / {sortedExercises.length}
              </span>
              <button
                onClick={() => goToExercise(1)}
                disabled={!hasNext}
                className="nav-btn"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="code-column">
          <div className="editor-section">
            <div className="editor-toolbar">
              <div className="toolbar-actions">
                {isWebLanguage && (
                  <button
                    onClick={() => setShowFileExplorer(!showFileExplorer)}
                    className="action-btn explorer-toggle"
                  >
                    {showFileExplorer ? 'Ocultar' : 'Mostrar'} Explorer
                  </button>
                )}
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

            <div className="editor-container-wrapper">
              {isWebLanguage && showFileExplorer && (
                <div
                  className="file-explorer"
                  ref={explorerRef}
                  style={{ width: explorerWidth }}
                >
                  <div className="file-explorer-header">
                    <h4><FaFolder style={{ marginRight: '8px' }} /> EXPLORER</h4>
                    <button onClick={addNewFile} className="add-file-btn">
                      <FaPlus />
                    </button>
                  </div>
                  <div className="file-list">
                    {files.map(file => (
                      <div
                        key={file.id}
                        className={`file-item ${activeFile === file.id ? 'active' : ''}`}
                        onClick={() => handleFileSelect(file.id)}
                      >
                        <span className="file-icon">
                          {getFileIcon(file.name)}
                        </span>
                        <span className="file-name">{file.name}</span>
                        {files.length > 1 && (
                          <button
                            onClick={(e) => deleteFile(file.id, e)}
                            className="delete-file-btn"
                            title="Eliminar archivo"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div
                    className="resize-handle"
                    onMouseDown={startResizing}
                    ref={resizeRef}
                  />
                </div>
              )}

              <div className="editor-container">
                <Editor
                  height="100%"
                  language={languageMap[getActiveFileType()] || 'plaintext'}
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
        </div>

        <div className="output-column">
          <div className="output-section">
            {!isWebLanguage ? (
              <>
                <div className="output-header">
                  <h3 className="section-title">Resultados</h3>
                </div>
                <div className="output-container">
                  <div className="output-content">
                    <pre>{output || 'Ejecuta el código para ver los resultados aquí...'}</pre>
                  </div>
                </div>
              </>
            ) : (
              <div className="preview-section">
                <div className="preview-header">
                  <h3 className="section-title">Vista Previa</h3>
                </div>
                <div className="preview-container">
                  <iframe
                    title="Preview"
                    srcDoc={previewHtml}
                    sandbox="allow-scripts allow-same-origin"
                    style={{ width: '100%', height: '100%', border: 'none' }}
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