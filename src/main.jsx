import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserAuthProvider } from './context/UserAuthContext.jsx'
// import { AdminAuthProvider } from './context/AdminAuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <UserAuthProvider>
       <App />
    </UserAuthProvider>
    </Router>
  </StrictMode>,
)
