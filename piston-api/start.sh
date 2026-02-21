#!/bin/sh

echo "===================================="
echo "🚀 INICIANDO PISTON API EN RAILWAY"
echo "===================================="

# Crear y asegurar directorios necesarios
mkdir -p /var/lib/isolate
chmod 777 /var/lib/isolate
mkdir -p /piston/data
chmod 777 /piston/data

# IR AL DIRECTORIO CORRECTO
cd /piston || cd /app || cd /

echo "📂 Directorio actual: $(pwd)"
ls -la

# Buscar el ejecutable de piston
if [ -f "./piston" ]; then
    echo "✅ Encontrado ./piston"
    chmod +x ./piston
    
    # Instalar lenguajes
    echo "📦 Instalando lenguajes..."
    ./piston ppman install python
    ./piston ppman install javascript
    
    echo "✅ Lenguajes instalados"
    
    # Iniciar API
    echo "🌍 Iniciando API en puerto 2000"
    exec node src/index.js
elif [ -f "/piston/piston" ]; then
    echo "✅ Encontrado /piston/piston"
    cd /piston
    chmod +x piston
    ./piston ppman install python
    ./piston ppman install javascript
    exec node src/index.js
else
    echo "❌ ERROR: No se encuentra el ejecutable de piston"
    echo "Buscando en todo el sistema..."
    find / -name "piston" -type f 2>/dev/null
    exit 1
fi