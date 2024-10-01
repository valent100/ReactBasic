import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppSaludo from './ejer1'
import AppSaludoIdioma from './ejer2'
import AppChildren from './ejer3'
import AppContador from './ejer4'
import './index.css'

// ejercicio 1
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppSaludo />
    <AppSaludoIdioma />
    <AppChildren />
    <AppContador />
  </StrictMode>,
)

// ejercicio 2
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AppSaludoIdioma />
//   </StrictMode>,
// )

// //ejercicio 3
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AppChildren />
//   </StrictMode>,
// )

// //ejercicio 4
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AppContador />
//   </StrictMode>,
// )
