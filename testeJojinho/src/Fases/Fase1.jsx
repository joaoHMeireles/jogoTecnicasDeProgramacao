import {Link} from 'react-router-dom'
import './Fase1.css'

function Fase1(){
    return(
        <div id='fase-1'>
            <div className="background">
                <div className="conteudo">
                    <div to='/' className='info'>
                        <Link to='/'>Menu</Link>
                        <div className="vidas">
                            barras de vida
                        </div>
                    </div>
                    <div className='luta'>
                        <div className="personagem">
                            <div className="imagem-personagem">
                                heroi
                            </div>
                        </div>
                        <div className="personagem">
                            <div className="imagem-personagem">
                                vilao
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fase1