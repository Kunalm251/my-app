import BgVideo from './components/BgVideo'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import LoginSignup from './components/Pages/LoginSignup';
import Home from './components/Pages/Home';
import BgVideo from './components/BgVideo';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/ShopCategory" element={<BgVideo/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>


      
      
    
      
      
    
   
  );
}

export default App;
