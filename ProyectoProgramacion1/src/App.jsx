import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return(
    <div>
      <header>
        <h1>Mi Página Web</h1>  
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Sobre Mí</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <main>
        <h2>Bienvenido</h2>
        <p>Esta es mi primera página hecha con React.</p>
      </main>

      <footer>
        <p>© 2026 Mi Página</p>
      </footer>
    </div>
    
    
  )
}

export default App
