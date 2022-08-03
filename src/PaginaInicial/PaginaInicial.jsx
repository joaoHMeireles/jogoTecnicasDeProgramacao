import {Link} from 'react-router-dom'
import './PaginaInicial.scss'

function PaginaInicial(props){

    function comecarJogo(){
        props.setJogador({nome: props.jogador.nome,pontuacao: 0})
    }

    function mudar(e){
        props.setJogador({nome: e.target.value, pontuacao: props.jogador.pontuacao})
    }

    return(
        <div id='pagina-inicial'>
            <h1>O Flautista de Hamlet </h1>
            <input id='nome' placeholder='Informe seu nome' onChange={mudar} type='text' value={props.nome}></input>
            {props.jogador.nome.length != 0 && <Link onClick={comecarJogo} to="fase/1">Começar novo jogo</Link>}
            <Link to="ranking">Ver Ranking</Link>
        </div>
    )
}

export default PaginaInicial