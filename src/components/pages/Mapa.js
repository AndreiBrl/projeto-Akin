import mapa from '../img/mapOri.jpg'
import setaVolta from '../img/setaVolta.png'
import { useNavigate } from "react-router-dom";

const Mapa = () => {
    const navigation = useNavigate();
    const navega = (rota) => {
        navigation(rota)

    }
    return (
        <div className='pagMapa'>

            <img className='oriMap' src={mapa} />
            <img className='setaVolta' src={setaVolta} onClick={()=>{navega('/Leitura')}}/>
        </div>
    )
}
export default Mapa;