import { useNavigate } from "react-router-dom";
import caveira from "../img/caveira.png"
import pedras from "../img/menu.png"
const Home = () => {

    const navigation = useNavigate();
    const clica = () => {
        navigation('/Leitura')

    }

    return (
        <div className="container">
            <div className="vilage">

                <h1 onClick={() => clica()} >Tribos Ancestrais</h1>

            </div>
            <div className="menu">
                {/* <img src={caveira}/> */}
                <img src={pedras}/>
            </div>
        </div>
    )
}
export default Home;