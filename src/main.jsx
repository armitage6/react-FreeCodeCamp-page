import React from 'react'// importamos react que nos permite crear componentes
import ReactDOM from 'react-dom/client' // Este nos permite interactuar con el doom 
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
