@echo off
REM Script de inicialização do projeto para Windows
REM Uso: start.bat

echo.
echo 🚀 Iniciando Portfólio Moderno...
echo.

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js não está instalado. Por favor, instale Node.js primeiro.
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set node_version=%%i
echo ✅ Node.js versão: %node_version%

REM Instalar dependências se não existirem
if not exist "node_modules" (
    echo 📦 Instalando dependências na raiz...
    call npm install
)

if not exist "frontend\node_modules" (
    echo 📦 Instalando dependências do frontend...
    cd frontend
    call npm install
    cd ..
)

if not exist "backend\node_modules" (
    echo 📦 Instalando dependências do backend...
    cd backend
    call npm install
    cd ..
)

REM Verificar .env no backend
if not exist "backend\.env" (
    echo ⚠️  backend\.env não encontrado
    echo 📋 Criando backend\.env a partir do exemplo...
    copy backend\.env.example backend\.env
    echo ⚠️  Por favor, edite backend\.env com suas credenciais de email
)

REM Iniciar servidores
echo.
echo 🎉 Iniciando servidores...
echo 📍 Frontend: http://localhost:5173
echo 📍 Backend: http://localhost:3001
echo.

call npm run dev
