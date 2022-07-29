import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './PaginaInicial/PaginaInicial'
import Fase1 from './Fases/Fase1'
import Ranking from './Ranking/Ranking'

function App() {
  return (
    <div className="App">
      <div className='Jojinho'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaInicial />}/>
          <Route path='/fase/1' element={<Fase1 />}/>
          <Route path='/ranking' element={<Ranking />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
