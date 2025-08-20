import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainPagina} from './MainPagina'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPagina />
  </StrictMode>,
)
