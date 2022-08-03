import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Fase.scss'

function Fase(props) {
    const rato = props.inimigo
    let vidaInimigo = props.inimigo.vida
    let vida, mana
    if(props.fase == 1){
        vida = 15
        mana = 4
    } else if (props.fase == 2){
        vida = 20
        mana = 6
    }

    const nomeInimigo = rato.nome
    const habilidadesVilao = rato.habilidades
    const habilidadesHeroi = props.habilidadesHeroi
    const [vidaHeroi, setVidaHeroi] = useState(vida)
    const [manaHeroi, setManaHeroi] = useState(mana)
    const [venceu, setVenceu] = useState(0)

    useEffect(() => {
        if(rato.vida > 0 && vida > 0){
            setVenceu(0)
        }
        if(rato.vida <= 0){
            setVenceu(1)
        }
        if(vida <= 0){
            setVenceu(2)
        }
        if (props.fase == 2 && rato.vida == 18){
            setVidaHeroi(vida)
            setManaHeroi(mana)
        }
    })

    const acoes = habilidadesHeroi.map((habilidade) => {
        return (
            <button key={habilidade.id} onClick={turno} dano={habilidade.dano} mana={habilidade.mana}>{habilidade.nome}</button>
        )
    })

    function acaoHeroi(dano, mana) {
        rato.vida = rato.vida - dano
        if (mana == 0 && manaHeroi < 6) {
            setManaHeroi(manaHeroi + 1)
        } else {
            setManaHeroi(manaHeroi - mana)
        }
    }

    function acaoInimigo() {
        let escolha = Math.floor(Math.random() * habilidadesVilao.length);
        let habilidade = habilidadesVilao[escolha]
        setInterval(alert(`O inimigo usou ${habilidade.nome}`), 2000)
        setVidaHeroi(vidaHeroi - habilidade.dano)
        if (vidaHeroi - habilidade.dano <= 0) {
            alert("Você perdeu!")
        }
    }

    function acoesTurno(dano, mana) {
        if (manaHeroi - mana < 0) {
            alert("Não tem mana o suficiente")
        } else {
            acaoHeroi(dano, mana)
            console.log(rato.vida, " ", dano);
            if (rato.vida <= 0) {
                alert("Você derrotou o " + nomeInimigo)
            } else {
                acaoInimigo()
            }
        }
    }

    function turno(e) {
        let dano = e.target.attributes[0].value
        let mana = e.target.attributes[1].value
        acoesTurno(dano, mana)
    }

    function tentarNovamente(){
        document.location.reload()
    }

    return (
        <div id='fase-1'>
            <div className="background">
                <div className="conteudo">
                    <div to='/' className='info'>
                        <Link to='/'>Menu</Link>
                        <div className="vidas">
                            <div className="barra-de-vida"> Vida Flaustista: {vidaHeroi}</div>
                            <div className="barra-de-vida"> Vida {nomeInimigo}: {rato.vida}</div>
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
                    {venceu == 1 &&
                    <div>
                        Você venceu
                        <button><Link to={props.proximaFase}>Próxima fase</Link></button>
                    </div>}
                    {venceu == 2 && 
                    <div>
                        Você perdeu
                        <button onClick={tentarNovamente}>Tentar novamente</button>
                        <button><Link to='/'>Voltar ao menu</Link></button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Fase