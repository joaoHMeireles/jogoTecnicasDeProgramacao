import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './PaginaInicial/PaginaInicial'
import Ranking from './Ranking/Ranking'
import Fase1 from './Fases/Fase1/Fase1'
import Fase2 from './Fases/Fase2/Fase2'
import Fase3 from './Fases/Fase3/Fase3'
import Fase4 from './Fases/Fase4/Fase4'
import Modal from './Modal/Modal'
import { useEffect, useState } from 'react'

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
  },
  {
    id: 3,
    nome: "Esquivar",
    dano: 0,
    mana: 0
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
    nome: "Esquivar",
    dano: 0,
    mana: 0
  },
  {
    id: 4,
    nome: "Melodia do inferno",
    dano: 9,
    mana: 2
  },
  {
    id: 5,
    nome: "Curar",
    dano: 2,
    mana: 3
  }
]


function App() {
  let lista = JSON.parse(localStorage.getItem("RANKING"))
  const [jogador, setJogador] = useState(JSON.parse(localStorage.getItem("JOGADOR")))

  useEffect(() => {
   // setJogador(JSON.parse(localStorage.getItem("JOGADOR")))
  }, [])

  useEffect(() => {
    localStorage.setItem("JOGADOR", JSON.stringify(jogador))
    console.log(jogador);
  })

  function adicionar(jogador){
    if(lista == null){
      lista = []
    }
    lista.push(jogador)
    localStorage.setItem("RANKING", JSON.stringify(lista))
  }

  return (
    <div className="App">
      <div className='Jojinho'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PaginaInicial setJogador={setJogador}/>} />
            <Route path='/fase/1' element={<Fase1 habilidadesHeroi={habilidadesHeroi1} jogador={jogador} setJogador={setJogador} fimDeJogo={adicionar}/>} />
            <Route path='/fase/2' element={<Fase2 habilidadesHeroi={habilidadesHeroi1} jogador={jogador} setJogador={setJogador} fimDeJogo={adicionar}/>} />
            <Route path='/fase/3' element={<Fase3 habilidadesHeroi={habilidadesHeroi2} jogador={jogador} setJogador={setJogador} fimDeJogo={adicionar}/>} />
            <Route path='/fase/4' element={<Fase4 habilidadesHeroi={habilidadesHeroi2} jogador={jogador} setJogador={setJogador} fimDeJogo={adicionar}/>} />
            <Route path='/ranking' element={<Ranking lista={lista}/>} />
            <Route path='/modal' element={<Modal venceu={1}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
