
import barraSobre from '../img/barraSobre.png'
import ola from "../img/ola.png"
import apoie from "../img/apoie.png"
import pixelArt from "../img/pixelArt.png"
import estaCurtindo from "../img/estaCurtindo.png"
import comoFunciona from "../img/comoFunciona.png"


const Apoie = () => {


    return (
        <>
            <div className="containerApoie">
                <div className='titulosApoie'>

                    <img className='ola' src={ola} />
                    <img className='estaCurtindo' src={estaCurtindo} />
                    <img className='pixelArt' src={pixelArt} />
                </div>
                
                   
                        <img className='apoie' src={apoie} />
                   
                   
               
            </div>
            <div className='containerApoieTexto'>

                <img className='barraApoie' src={comoFunciona} />
                <div className='textoApoie'>
                    <div className='textoApoie-2'>

                        <p>Iniciamente, criei a história de "Tribos ancestrais" para ser no formato de livro, totalmente escrita e sem imagens. Um tempo depois, comecei a criar imagens com a IA e mudei completamente de ideia. A história começou a fazer muito mais sentido se fosse um mangá do que um livro. Então eu decidi que começaria a aprender a desenhar para transforma essa obra em um mangá. </p>
                        <p>Se você está curtindo todo meu conteúdo e quer ver essa história virar um mangá de verdade, pode fazer uma doação para me ajudar a aprender a desenhar e continuar criando mais!</p>
                        <p><b>OBS:</b> Vou continuar postando mais capítulos neste formato, usando IA para gerar as imagens, enquanto aprendo desenhar!<br/> <br/><b>Obrigado por tudo galera!!</b></p>
                        <p><b>PIX: </b>contatoandreibr@gmail.com</p>
                        <p> Titular: Andrei Barbuto Romanelli Lopes</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Apoie;