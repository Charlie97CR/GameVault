import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Renderiza el componente raiz principal dentro del contenedor HTML del DOM
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)