import '../Fases.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import flautista from '../../assets/flautista.png';
import ratao from '../../assets/ratao.png';
import floresta from '../../assets/floresta.png';

function Fase2(props) {
    const nomeInimigo = "Rato Atroz"
    const nomePessoa = props.jogador.nome
    const habilidadesVilao = [
        {
            id: 1,
            nome: "Arranhar",
            dano: 2,
            mana: 0
        },
        {
            id: 2,
            nome: "Morder",
            dano: 5,
            mana: 0
        }
    ]
    const habilidadesHeroi = props.habilidadesHeroi
    const [vidaRato, setVidaRato] = useState(14)
    const [vidaHeroi, setVidaHeroi] = useState(15)
    const [manaHeroi, setManaHeroi] = useState(4)
    const [venceu, setVenceu] = useState(0)

    useEffect(() => {
        if (vidaRato > 0 && vidaHeroi > 0) {
            setVenceu(0)
        }
        if (vidaRato <= 0 && venceu != 1) {
            setVenceu(1)
        }
        if (vidaHeroi <= 0 && venceu != 2) {
            setVenceu(2)
            console.log("fase 2 perdeu");
            props.fimDeJogo(props.jogador)
        }
    })

    useEffect(() => {
        props.setJogador({ nome: props.jogador.nome, pontuacao: props.jogador.pontuacao + 100 })
    }, [])


    const acoes = habilidadesHeroi.map((habilidade) => {
        return (
            <button key={habilidade.id} onClick={turno} dano={habilidade.dano} mana={habilidade.mana} nome={habilidade.nome}>
                {habilidade.nome}
                Valor: {habilidade.dano}
                Mana: {habilidade.mana}
            </button>)
    })

    function acaoHeroi(dano, mana, nomeHabilidade) {
        if (nomeHabilidade != "Esquivar") {
            alert(nomePessoa + " usou " + nomeHabilidade + ", dando " + dano + " de dano!")
            setVidaRato(vidaRato - dano)
        } else {
            alert(nomePessoa + " usou " + nomeHabilidade + "!")
        }
        if (mana == 0 && manaHeroi < 4) {
            setManaHeroi(manaHeroi + 1)
        } else {
            setManaHeroi(manaHeroi - mana)
        }
    }

    function acaoInimigo(nome) {
        let escolha = Math.floor(Math.random() * habilidadesVilao.length);
        let habilidade = habilidadesVilao[escolha]
        if (nome == "Esquivar") {
            alert(`O inimigo usou ${habilidade.nome}, mas você esquivou!`)
        } else {
            alert(`O inimigo usou ${habilidade.nome}, dando ${habilidade.dano} de dano!`)
            setVidaHeroi(vidaHeroi - habilidade.dano)
            if (vidaHeroi - habilidade.dano <= 0) {
                alert("Você perdeu!")
            }
        }
    }

    function acoesTurno(dano, mana, nome) {
        if (manaHeroi - mana < 0) {
            alert("Não tem mana o suficiente")
        } else {
            acaoHeroi(dano, mana, nome)
            props.setJogador({ nome: props.jogador.nome, pontuacao: props.jogador.pontuacao - 8 })
            if (vidaRato - dano <= 0) {
                alert("Você derrotou o " + nomeInimigo)
                props.setJogador({ nome: props.jogador.nome, pontuacao: props.jogador.pontuacao + 40 })
            } else {
                acaoInimigo(nome)
            }
        }
    }

    function turno(e) {
        let dano = e.target.attributes[0].value
        let mana = e.target.attributes[1].value
        let nome = e.target.attributes[2].value
        acoesTurno(dano, mana, nome)
    }

    return (
        <div id='fase'>
            <div className="background">
                <div className="conteudo">
                <div className="background-luta">
                        <img src={floresta} />
                    </div>

                    <div className='luta'>
                        <div className="personagem">
                            <div className="imagem-personagem">
                                <img src={flautista} alt="Flautista" />
                            </div>
                        </div>

                        <div className="personagem">
                            <div className="imagem-personagem">
                                <img src={ratao} alt="Rato Bebê" />
                            </div>
                        </div>
                    </div>

                    <div to='/' className='info'>
                        <Link to='/'>Menu</Link>
                        <div className="vidas">
                            <div className="barra-de-vida"> Vida Flaustista: {vidaHeroi}</div>
                            <div className="barra-de-vida"> Vida {nomeInimigo}: {vidaRato}</div>
                        </div>
                        <div className="numeros">
                            <div className="caracteristica">
                                Mana: {manaHeroi}
                            </div>
                        </div>
                        <div className="acoes">
                            {acoes}
                        </div>
                        {venceu == 1 &&
                            <div>
                                Você venceu
                                <button><Link to='/fase/3'>Próxima fase</Link></button>
                            </div>}
                        {venceu == 2 &&
                            <div>
                                Você perdeu
                                <button><Link to='/fase/1'>Tentar novamente</Link></button>
                                <button><Link to='/'>Voltar ao menu</Link></button>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fase2