import './Modal.scss';
import vitoria from '../assets/vitoria.jpg';
import trofeu from '../assets/trofeu.png';
import over from '../assets/gameOver.jpg';

function Modal(props) {

    return (
        <div id="fundo">
            <div id="modal">
                {props.venceu == 1 ?
                    <div id="content">
                        <div id="imagem">
                            <img src={vitoria}></img>
                            <img id="trofeu" src={trofeu}></img>
                        </div>
                        <div id="botoes">
                            <button>Inicio</button>
                            <button>Ranking</button>
                        </div>
                    </div>
                    :
                    <div>

                    </div>
                }

            </div>
        </div>
    )
}

export default Modal;