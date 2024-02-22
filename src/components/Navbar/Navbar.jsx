import React, { useState } from "react";
import './Navbar.css'
import logo from '../Navbar/logo.png'
import cart_icon from '../Navbar/cart_icon.png'
import Home from "../Pages/Home";
import { Link } from "react-router-dom";


const Navbar = () => {

        const [menu,setMenu] = useState(Home);
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('Home')}}><Link style={{textDecoration:"none" ,color:'black'}} to='/'>Home</Link>{menu==='Home'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('About')}}><Link style={{textDecoration:"none",color:'black'}} to='/About'>About</Link>{menu==='About'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('Contact')}}><Link style={{textDecoration:"none",color:'black'}} to='/Contact'>Contact</Link>{menu==='Contact'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration:"none",color:'black'}} to='/login'><button>Login</button></Link>
                <Link style={{textDecoration:"none",color:'black'}} to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
         
    );
    }

    export default Navbar