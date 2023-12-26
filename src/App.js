import './App.css';
import Post from './components/Post';
import './components/style.css'
import { loadPost } from './utils/loadPosts';
import { useEffect, useState } from 'react';
import "./components/style.css"

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
    <div style={{ backgroundColor: "lightgray" }} >
      <h1 style={{ textAlign: "center", marginBottom: "2vw" }}>
        Teste
      </h1>
    
    </div>
  );
}

export default App;
