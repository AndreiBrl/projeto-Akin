
import barraSobre from '../img/barraSobre.png'
import ola from "../img/ola.png"
import apoie from "../img/apoie.png"
import pixelArt from "../img/pixelArt.png"
import estaCurtindo from "../img/estaCurtindo.png"
import comoFuncioa from "../img/comoFuncioa.png"


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

                <img className='barraApoie' src={barraSobre} />
                <div className='textoSobre'>
                    <div className='textoSobre-2'>

                        <p>Olá! Meu nome é Andrei, e vou contar aqui como me tornei apaixonado por histórias! Tudo começou com os desenhos animados que assistia todos os dias e as idas ao cinema com meus pais. Cresci influenciado pelo Goku de DBZ e por inúmeros filmes de Hollywood. Hoje, sou um consumidor de histórias de todos os tipos, como livros, mangás, séries e filmes. Histórias sempre me ajudaram a entender melhor o mundo, e por isso as admiro. </p>
                        <p>Nunca me canso de assistir a um personagem brilhando na tela depois de ter batalhado tanto. É sempre inspirador absorver uma boa história.</p>
                        <p>Atualmente, estudo para me tornar programador e, nas horas vagas, me dedico a escrever minha primeira narrativa, “Tribos Ancestrais”. A história nasceu de muitas caminhadas pelas ruas com o fone de ouvido no máximo e aquela boa música de ação. Não sei ao certo quando comecei a querer escrever, e mesmo que soubesse, no início, minhas ideias eram apenas personagens malucos pulando por aí. Comecei a escrever os primeiros capítulos de “Tribos Ancestrais” durante a pandemia, enquanto fazia alguns cursos de criação literária, juntamente com muitos vídeos do YouTube. Todo esse processo sempre foi divertido para mim, e, apesar das dificuldades, é isso que me move até hoje!  </p>
                        <p><b>Bom... é isso. Espero que gostem de "Tribos Ancestrais"!</b></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Apoie;