import { Link } from 'react-router-dom';
import './Ranking.scss';
import rank from '../assets/rank.jpg';

function Ranking() {
    const lista = JSON.parse(localStorage.getItem("RANKING"))
    let listaOrdenada
    let ranking
    let naoTem = false

    if (lista) {
        naoTem = true
    } else {
        listaOrdenada = lista?.sort(function (a, b) {
            return b.pontuacao - a.pontuacao;
        });

        ranking = listaOrdenada.map((jogador) => {
            return (
                <tr className='linha'>
                    <td> {jogador.nome} </td>
                    <td> {jogador.pontuacao} </td>
                </tr>
            )
        })

    }


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
                    {!naoTem &&
                        { ranking }}
                </table>

            </div>
            <div id='botao'><Link to="/">Início</Link></div>
        </div>
    )
}

export default Ranking