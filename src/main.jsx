import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TokenProvider } from "./component/TokenContext"
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider> {/* This wraps your entire application */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TokenProvider>
  </React.StrictMode>,
)

