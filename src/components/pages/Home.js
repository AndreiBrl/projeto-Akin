import { useNavigate } from "react-router-dom";
import menuMobile from "../img/menu.png"
import menuDesk from "../img/menuDesk.png"
import titulo from "../img/tituloHome.png"
import livro from "../img/livroAkin.png"
import homenzin from "../img/homenzin.png"
import saco from "../img/saco.png"
const Home = () => {

    const navigation = useNavigate();
    const navega = (rota) => {
        navigation(rota)

    }

    return (
        <div className="containerHome">
            <div className="vilage">


                <img src={titulo} />

            </div>

            <div className="menu">
                
                    
                        <img className="m-desk" src={menuDesk} />
                        <img className="m-mobile"src={menuMobile} />
                        <img className="livroAkin"src={livro} onClick={() => { navega('/Leitura') }}/>
                        <img className="homenzin"src={homenzin} onClick={() => { navega('/Sobre') }}/>
                        <img className="saco"src={saco} />
                        <h1 className="emBreve">EM BREVE</h1>
                
                <div onClick={() => { navega('/Sobre') }} className="about"></div>
                <div onClick={() => { navega('/Leitura') }} className="book"></div>
                <div className="catarse"></div>
            </div>
        </div>
    )
}
export default Home;