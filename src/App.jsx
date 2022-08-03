import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './PaginaInicial/PaginaInicial'
import Ranking from './Ranking/Ranking'
import Fase1 from './Fases/Fase1/Fase1'
import Fase2 from './Fases/Fase2/Fase2'
import Fase3 from './Fases/Fase3/Fase3'
import Fase4 from './Fases/Fase4/Fase4'
import { useState } from 'react'

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
    mana: 1
  }
]

const habilidadesHeroi2 = [
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
    mana: 1
  },
  {
    id: 3,
    nome: "Melodia do inferno",
    dano: 9,
    mana: 2
  },
  {
    id: 4,
    nome: "Curar",
    dano: 2,
    mana: 3
  }
]

function App() {
  const [nome, setNome] = useState("")
  return (
    <div className="App">
      <div className='Jojinho'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PaginaInicial nome={nome} setNome={setNome}/>} />
            <Route path='/fase/1' element={<Fase1 habilidadesHeroi={habilidadesHeroi1}/>} />
            <Route path='/fase/2' element={<Fase2 habilidadesHeroi={habilidadesHeroi1}/>} />
            <Route path='/fase/3' element={<Fase3 habilidadesHeroi={habilidadesHeroi2}/>} />
            <Route path='/fase/4' element={<Fase4 habilidadesHeroi={habilidadesHeroi2}/>} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/venceu' element={<Ranking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
