
import barraSobre from '../img/barraSobre.png'
import ola from "../img/ola.png"
import apoie from "../img/apoie.png"
import pixelArt from "../img/pixelArt.png"
import estaCurtindo from "../img/estaCurtindo.png"
import comoFunciona from "../img/comoFunciona.png"
import setaVolta from "../img/setaVolta.png"
import { useNavigate } from "react-router-dom";
const Apoie = () => {

    const navigation = useNavigate();
    const navega = (rota) => {
        navigation(rota)

    }
    
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
            <img style={{position:"absolute",top:'5vw',zIndex:5}}className='volta'src={setaVolta} onClick={()=>navega('/')}/>
                <img className='barraApoie' src={comoFunciona} />
                <div className='textoApoie'>
                    <div className='textoApoie-2'>

                        <p>Iniciamente, criei a história de "Tribos ancestrais" para ser no formato de livro, totalmente escrita e sem imagens. Um tempo depois, comecei a criar imagens com IA e mudei completamente de ideia. A história começou a fazer muito mais sentido se fosse um mangá do que um livro. Então, decidi que começaria a aprender a desenhar para transformar essa obra em um mangá. </p>
                        <p>Se você está curtindo todo meu conteúdo e quer ver essa história virar um mangá de verdade, pode fazer uma doação para me ajudar a aprender a desenhar e continuar criando mais!</p>
                        <p><b>OBS:</b> Apesar deste formato de história (livro + imagens) ser difícil de construir e ter alguns bugs, vou continuar postando mais capítulos dessa forma e continuar usando IA para gerar as imagens. Enquanto isso, vou aprendendo a desenhar para oferecer um contéudo melhor e mais bonito!<br/> <br/><b>Obrigado por tudo galera!!</b></p>
                        <p><b>PIX: </b>contatoandreibr@gmail.com</p>
                        <p> Titular: Andrei Barbuto Romanelli Lopes</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Apoie;