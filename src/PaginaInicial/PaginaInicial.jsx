import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Floresta from '../assets/floresta.png';
import './PaginaInicial.scss';

function PaginaInicial(props) {
    const [jogador, setJogador] = useState({ nome: "", pontuacao: 0 });
    useEffect(() => {
        localStorage.setItem("JOGADOR", JSON.stringify(jogador));
    }, []);

    function comecarJogo() {
        props.setJogador(jogador);
        localStorage.setItem("JOGADOR", JSON.stringify(jogador));
    }

    function mudar(e) {
        setJogador({ nome: e.target.value, pontuacao: jogador.pontuacao });
    }

    return (
        <div id='pagina-inicial'>
            <h1>O Flautista de Hamelin </h1>
            <div id='input'>
                <p>Informe seu usuário: </p>
                <input id='nome' placeholder='Usuário' onChange={mudar} type='text' value={jogador.nome}></input>
                {jogador.nome.length != 0 && <Link onClick={comecarJogo} to="fase/1">Começar novo jogo</Link>}
            </div>
            <div id='botao'><Link to="ranking">Ver Ranking</Link></div>

        </div>
    )
}

export default PaginaInicial