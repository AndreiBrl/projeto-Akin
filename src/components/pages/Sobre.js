import nome from '../img/nomeAbout.png'
import autor from '../img/autor-idealizador.png'
import perfil from '../img/perfil.png'
import insta from '../img/insta.png'
import gmail from '../img/gmail.png'
import barraSobre from '../img/barraSobre.png'

const Sobre = () => {


    return (
        <>
            <div className="containerSobre">
                <div className='titulosSobre'>

                    <img className='autor' src={autor} />
                    <img className='nome' src={nome} />
                    <img className='perfil' src={perfil} />
                </div>
                <div className='redesSociais'>
                    <a href='https://www.instagram.com/tribos_ancestrais?igsh=MWwybzNtZ3dyd2I5dQ==' target='blank'>

                        <img className='insta' src={insta} />
                    </a>
                    <img className='gmail' src={gmail} />
                </div>
            </div>
            <div className='containerSobreTexto'>

                <img className='barraSobre' src={barraSobre} />
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

export default Sobre;