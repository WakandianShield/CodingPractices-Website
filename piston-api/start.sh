#!/bin/sh

echo "===================================="
echo "🚀 Iniciando Piston API en Railway"
echo "===================================="

# Asegurar permisos
echo "📁 Configurando directorios..."
mkdir -p /var/lib/isolate
chmod 777 /var/lib/isolate
mkdir -p /piston/data
chmod 777 /piston/data

cd /piston

# Instalar lenguajes (los más comunes)
echo "📦 Instalando lenguajes (esto toma 1-2 minutos)..."
./piston ppman install python
./piston ppman install javascript
./piston ppman install java
./piston ppman install cpp
./piston ppman install csharp

echo "✅ Lenguajes instalados:"
./piston ppman list

echo "===================================="
echo "🌍 API disponible en puerto 2000"
echo "===================================="

# Iniciar la API
exec node src/index.js