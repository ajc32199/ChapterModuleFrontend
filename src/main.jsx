import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './components/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="App">
      <LoginPage />
    </div>
  </StrictMode>,
)
