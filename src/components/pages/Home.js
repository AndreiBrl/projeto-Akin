import { useNavigate } from "react-router-dom";
import caveira from "../img/caveira.png"
import pedras from "../img/menu.png"
import titulo from "../img/tituloHome.png"
const Home = () => {

    const navigation = useNavigate();
    const navega = (rota) => {
        navigation(rota)

    }

    return (
        <div className="container">
            <div className="vilage">


                <img src={titulo}/>

            </div>
            <div className="menu">
                {/* <img src={caveira}/> */}
                <img src={pedras}/>
                <div  onClick={()=>{navega('/Leitura')}} className="about"></div>
                <div className="book"></div>
                <div className="catarse"></div>
            </div>
        </div>
    )
}
export default Home;