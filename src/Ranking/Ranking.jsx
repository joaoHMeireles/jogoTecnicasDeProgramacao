import { Link } from 'react-router-dom';
import './Ranking.scss';
import rank from '../assets/rank.jpg';

function Ranking() {
    const lista = JSON.parse(localStorage.getItem("RANKING"))

    const listaOrdenada = lista.sort(function (a, b) {
        return b.pontuacao - a.pontuacao;
    });

    const ranking = listaOrdenada.map((jogador) => {
        return (
            <tr className='linha'>
                <td> {jogador.nome} </td>
                <td> {jogador.pontuacao} </td>
            </tr>
        )
    })

    return (
        <div id='ranking'>
            <div className="imagem">
                <img src={rank}></img>
            </div>
            <div className='container-rank'>
                <table className='rank'>
                    <tr className='linha'>
                        <th>NickName</th>
                        <th>Pontuação</th>
                    </tr>
                    {ranking}
                </table>

            </div>
            <Link to="/">Inicio</Link>
        </div>
    )
}

export default Ranking