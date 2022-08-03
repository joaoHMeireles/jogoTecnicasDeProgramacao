import { useState } from 'react'
import {Link} from 'react-router-dom'
import './PaginaInicial.scss'

function PaginaInicial(props){
    function mudar(e){
        props.setNome(e.target.value)
    }

    return(
        <div id='pagina-inicial'>
            <h1>O Flautista de Hamlet II</h1>
            <input id='nome' placeholder='Informe seu nome' onChange={mudar} type='text' value={props.nome}></input>
            {props.nome.length != 0 && <Link to="fase/1">Começar novo jogo</Link>}
            <Link to="ranking">Ver Ranking</Link>
        </div>
    )
}

export default PaginaInicial