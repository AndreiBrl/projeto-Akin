import './App.css';
import './components/style.css'
import "./components/style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Leitura from './components/pages/Leitura';
import Sobre from './components/pages/Sobre';
import { Helmet } from 'react-helmet';
function App() {

  return (
    <>
      <Helmet>
        <title>Tribos Ancestrais</title>
      </Helmet>
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
