import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Day15.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
