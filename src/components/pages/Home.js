import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigation = useNavigate();
    const clica = () => {
        navigation('/Leitura')

    }

    return (
        <div>
            <h1 onClick={() => clica()} style={{ color: "white" }}>Teste</h1>
        </div>
    )
}
export default Home;