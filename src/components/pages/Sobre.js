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
            </div>

        </>
    )
}

export default Sobre;