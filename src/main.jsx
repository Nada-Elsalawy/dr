import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import "../node_modules/flowbite/dist/flowbite.phoenix.js"
import { HeroUIProvider } from '@heroui/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HeroUIProvider>
       <App />
     </HeroUIProvider>
   
  </StrictMode>,
)
