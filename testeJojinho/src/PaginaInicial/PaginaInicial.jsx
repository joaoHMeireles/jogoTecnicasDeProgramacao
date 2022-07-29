import {Link} from 'react-router-dom'
import './PaginaInicial.css'

function PaginaInicial(){
    return(
        <div id='pagina-inicial'>
            <h1>O Flautista de Hamlet II</h1>
            <Link to="fase/1">Começar novo jogo</Link>
            <Link to="ranking">Ver Ranking</Link>
        </div>
    )
}

export default PaginaInicial