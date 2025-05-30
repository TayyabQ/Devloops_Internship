import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {HabitProvider} from './components/HabitContext.jsx'

createRoot(document.getElementById('root')).render(
    <HabitProvider>
      <App />
    </HabitProvider>
)
