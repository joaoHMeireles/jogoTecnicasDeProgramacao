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

const lista = [
  {
    nome:"joj", pontuacao:350
  },
  {
    nome:"bru", pontuacao:150
  },
  {
    nome:"cam", pontuacao:550
  }
]

function App() {
  const [jogador, setJogador] = useState({nome: "", pontuacao: 0})

  useEffect(() => {
    console.log(jogador);
  })

  function adicionar(jogador){
    console.log("app acabou");
    lista.push(jogador)
  }

  return (
    <div className="App">
      <div className='Jojinho'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PaginaInicial jogador={jogador} setJogador={setJogador}/>} />
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
