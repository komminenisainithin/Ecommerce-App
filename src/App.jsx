import './App.css'
import Home from './Pages/Home/Home';
import NavbarContainer from './Components/Navbar/Navbar';
import Product from './Pages/Home/Product/Product';
import { Routes,Route } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
function App() {
  

  return (
    <div style={{overflow:'hidden'}}>
      <NavbarContainer />
      <Routes>
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />


      </Routes>
      {/* <Product/> */}
      {/* <Home></Home> */}
    </div>
  )
}

export default App
