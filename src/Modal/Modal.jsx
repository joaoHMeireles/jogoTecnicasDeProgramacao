import './Modal.scss';
import vitoria from '../assets/vitoria.jpg';
import over from '../assets/gameOver.jpg';

function Modal(props) {

    return (
        <div id="fundo">
            <div id="modal">
                {props.venceu == 1 ?
                    <div>
                        <div id="imagem">
                            <img src={vitoria}></img>
                        </div>
                        <div id="botoes">
                            <button>Ranking</button>
                            <button>Inicio</button>
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