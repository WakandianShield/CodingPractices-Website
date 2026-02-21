#!/bin/sh

echo "===================================="
echo "🚀 INICIANDO PISTON API EN RAILWAY"
echo "===================================="

# Crear y asegurar directorios necesarios
mkdir -p /var/lib/isolate
chmod 777 /var/lib/isolate
mkdir -p /piston/data
chmod 777 /piston/data

cd /piston

echo "📂 Directorio actual: $(pwd)"
echo "📂 Contenido:"
ls -la

# Verificar que el CLI está instalado
if command -v piston &> /dev/null; then
    echo "✅ CLI de piston encontrado"
    
    # Instalar lenguajes
    echo "📦 Instalando lenguajes..."
    piston ppman install python
    piston ppman install javascript
    piston ppman install java
    piston ppman install cpp
    
    echo "✅ Lenguajes instalados"
else
    echo "⚠️ CLI no encontrado, instalando lenguajes manualmente..."
    
    # Instalación manual de lenguajes
    mkdir -p /piston/packages
    cd /piston/packages
    
    curl -fsSL https://github.com/engineer-man/piston/releases/download/untagged-xxx/python.tar.gz | tar xz
    curl -fsSL https://github.com/engineer-man/piston/releases/download/untagged-xxx/javascript.tar.gz | tar xz
    
    cd /piston
fi

# Iniciar la API
echo "🌍 Iniciando API en puerto 2000"
exec node src/index.js