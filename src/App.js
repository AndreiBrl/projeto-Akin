import './App.css';
import './components/style.css'
import "./components/style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Leitura from './components/pages/Leitura';
import Sobre from './components/pages/Sobre';

function App() {
  // const [postsImgs, setPostsImgs] = useState([])

  // useEffect(() => {
  //   const load = async () => {
  //     const loadData = await loadPost();
  //     setPostsImgs(loadData)
  //   }
  //   load();

  // }, [])
  // const [numPosts,setNumPosts]=useState(6);

  // const maisPosts = () => {
  //   setNumPosts(numPosts+6)
  //   console.log(numPosts);

  // }




  return (
    <>

      <BrowserRouter>
      <Routes>

        <Route>
          <Route path="/" element={<Home />} />
          <Route path="leitura" element={<Leitura />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
