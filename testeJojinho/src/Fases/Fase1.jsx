import {Link} from 'react-router-dom'
import './Fase1.css'

function Fase1(){
    return(
        <div id='fase-1'>
            <div className="background">
                <div className="conteudo">
                    <Link to='/' className='botao'>Menu</Link>

                </div>
            </div>
        </div>
    )
}

export default Fase1