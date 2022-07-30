import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './PaginaInicial/PaginaInicial'
import Fase from './Fases/Fase'
import Ranking from './Ranking/Ranking'

const habilidadesHeroi1 = [
  {
      id: 1,
      nome: "FLAUTADA",
      dano: 3,
      mana: 0
  },
  {
      id: 2,
      nome: "Som estridente",
      dano: 6,
      mana: 2
  }
]

const habilidadesRatoBebe = [
  {
      id: 1,
      nome: "Arranhar",
      dano: 2,
      mana: 0
  }
]

function App() {
  return (
    <div className="App">
      <div className='Jojinho'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaInicial />}/>
          <Route path='/fase/1/1' element={<Fase nomeInimigo = "Rato Bebê" habilidadesVilao={habilidadesRatoBebe} habilidadesHeroi={habilidadesHeroi1} imagem={1}/>}/>
          <Route path='/fase/1/2' element={<Fase />}/>
          <Route path='/fase/2/1' element={<Fase />}/>
          <Route path='/fase/2/2' element={<Fase />}/>
          <Route path='/ranking' element={<Ranking />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
