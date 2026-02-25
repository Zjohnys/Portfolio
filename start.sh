#!/bin/bash

# Script de inicialização do projeto
# Uso: ./start.sh

echo "🚀 Iniciando Portfólio Moderno..."

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js não está instalado. Por favor, instale Node.js primeiro."
    exit 1
fi

echo "✅ Node.js versão: $(node --version)"

# Instalar dependências se não existirem
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências na raiz..."
    npm install
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Instalando dependências do frontend..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Instalando dependências do backend..."
    cd backend && npm install && cd ..
fi

# Verificar .env no backend
if [ ! -f "backend/.env" ]; then
    echo "⚠️  backend/.env não encontrado"
    echo "📋 Criando backend/.env a partir do exemplo..."
    cp backend/.env.example backend/.env
    echo "⚠️  Por favor, edite backend/.env com suas credenciais de email"
fi

# Iniciar servidores
echo ""
echo "🎉 Iniciando servidores..."
echo "📍 Frontend: http://localhost:5173"
echo "📍 Backend: http://localhost:3001"
echo ""

npm run dev
