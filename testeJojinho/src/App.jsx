import './App.scss'
import floresta from "./assets/background.png"
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

const ratoBebe = {
  nome: "Rato Bebê",
  vida: 8,
  habilidades: [
    {
      id: 1,
      nome: "Arranhar",
      dano: 2,
      mana: 0
    }
  ]
}

const ratao = {
  nome: "Rato Atroz",
  vida: 14,
  habilidades: [
    {
      id: 1,
      nome: "Arranhar",
      dano: 2,
      mana: 0
    },
    {
      id: 2,
      nome: "Morder",
      dano: 5,
      mana: 0
    },
  ]
}

const rataoDeArmadura = {
  nome: "Rato Soldado",
  vida: 18,
  habilidades: [
    {
      id: 1,
      nome: "Arranhar",
      dano: 2,
      mana: 0
    },
    {
      id: 2,
      nome: "Morder",
      dano: 5,
      mana: 0
    },
    {
      id: 3,
      nome: "Investida",
      dano: 7,
      mana: 0
    }
  ]
}

const rataoRei = {
  nome: "Rato Rei",
  vida: 18,
  habilidades: [
    {
      id: 1,
      nome: "Arranhar",
      dano: 2,
      mana: 0
    },
    {
      id: 2,
      nome: "Morder",
      dano: 5,
      mana: 0
    },
    {
      id: 3,
      nome: "Investida",
      dano: 7,
      mana: 0
    },
    {
      id: 4,
      nome: "Enforcamento",
      dano: 9,
      mana: 0
    }
  ]
}

function App() {
  return (
    <div className="App">
      <div className='Jojinho'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PaginaInicial />} />
            <Route path='/fase/1/1' element={<Fase inimigo={ratoBebe} habilidadesHeroi={habilidadesHeroi1} imagem={floresta} fase={1} proximaFase="/fase/1/2"/>} />
            <Route path='/fase/1/2' element={<Fase inimigo={ratao} habilidadesHeroi={habilidadesHeroi1} imagem={floresta} fase={1} proximaFase="/fase/2/1"/>} />
            <Route path='/fase/2/1' element={<Fase inimigo={rataoDeArmadura} habilidadesHeroi={habilidadesHeroi2} imagem={"cidade"} fase={2} proximaFase="/fase/2/2"/>} />
            <Route path='/fase/2/2' element={<Fase inimigo={rataoRei} habilidadesHeroi={habilidadesHeroi2} imagem={"cidade"} fase={2} proximaFase="/acabou"/>} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/acabou' element={<Ranking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
