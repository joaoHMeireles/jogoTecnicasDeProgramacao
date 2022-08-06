import { Link } from 'react-router-dom';
import './Ranking.scss';
import rank from '../assets/rank.jpg';

function Ranking(props) {
    const lista = props.lista;
    console.log(lista);

    const listaOrdenada = lista.sort(function (a, b) {
        return b.pontuacao - a.pontuacao;
    });

    const ranking = listaOrdenada.map((jogador) => {
        return (
            <div className='linha'>
                <div> NickName: {jogador.nome} </div>
                <div> Pontuação: {jogador.pontuacao} </div>
            </div>
        )
    })

    return (
        <div id='ranking'>
            <div className="imagem">
                <img src={rank}></img>
            </div>
            <div className='rank'>
                {ranking}
            </div>
            <Link to="/">Inicio</Link>
        </div>
    )
}

export default Ranking