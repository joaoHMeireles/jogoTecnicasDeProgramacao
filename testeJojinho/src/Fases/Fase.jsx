import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Fase.scss'

function Fase(props) {
    const nomeInimigo = props.nomeInimigo
    const habilidadesVilao = props.habilidadesVilao
    const habilidadesHeroi = props.habilidadesHeroi
    const [vidaHeroi, setVidaHeroi] = useState(15)
    const [manaHeroi, setManaHeroi] = useState(6)
    const [vidaInimigo, setVidaInimigo] = useState(8)

    const acoes = habilidadesHeroi.map((habilidade) => {
        return(
            <button key={habilidade.id} onClick={turno} dano={habilidade.dano} mana={habilidade.mana}>{habilidade.nome}</button>
        )
    })

    function acaoHeroi(dano, mana) {
        setVidaInimigo(vidaInimigo - dano)
        setManaHeroi(manaHeroi - mana)
    }

    function acaoInimigo(){
        let escolha = Math.floor(Math.random() * habilidadesVilao.length);
        let habilidade = habilidadesVilao[escolha]
        setInterval(alert(`O inimigo usou ${habilidade.nome}`), 2000)
        setVidaHeroi(vidaHeroi - habilidade.dano)
    }

    function acoesTurno(dano, mana){
        if(manaHeroi - mana < 0){
            alert("Não tem mana o suficiente")
        } else {
            acaoHeroi(dano, mana)
            if(vidaInimigo - dano <= 0){
                alert("Você derrotou o " + nomeInimigo)
            } else {
                acaoInimigo()
            }
        }
    }

    function novoTurno(){
        setManaHeroi(manaHeroi + 1)
    }

    function turno(e){
        let dano = e.target.attributes[0].value
        let mana = e.target.attributes[1].value
        acoesTurno(dano, mana)
        if(manaHeroi < 6){
            novoTurno()
        }
    }

    return (
        <div id='fase-1'>
            <div className="background">
                <div className="conteudo">
                    <div to='/' className='info'>
                        <Link to='/'>Menu</Link>
                        <div className="vidas">
                            <div className="barra-de-vida"> Vida Flaustista: {vidaHeroi}</div>
                            <div className="barra-de-vida"> Vida {nomeInimigo}: {vidaInimigo}</div>
                        </div>
                        <div className="numeros">
                            <div className="caracteristica">
                                Mana: {manaHeroi}
                            </div>
                        </div>
                        <div className="acoes">
                            {acoes}
                        </div>
                    </div>
                    <div className='luta'>
                        <div className="personagem">
                            <div className="imagem-personagem">
                                Flautista
                            </div>
                        </div>
                        <div className="personagem">
                            <div className="imagem-personagem">
                                {nomeInimigo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fase