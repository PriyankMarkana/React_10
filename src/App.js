
import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Content from './Content';
import Cart from './Cart';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/product/:id" element={<Content></Content>} />
        <Route path="/catagories/:cate" element={<Home></Home>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>

    </>

  );
}

export default App;
