import React from "react";
import './Footer.css'
import instagram_icon from '../Footer/instagram_icon.png'
import whatsap_icon from '../Footer/whatsapp_icon.png'
import pintester_icon from '../Footer/pintester_icon.png'

const Footer = () => {
    return (
       <div className="footer">
        <h1>Important Links</h1>
            <ul className="footer-links">
            <li>Privacy Policy</li>
             <li>Returns Policy</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
            </ul>
        <div className="footer-social-icons">
                <div className="footer-icons-container">
                        <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                        <img src={whatsap_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                        <img src={pintester_icon} alt="" />
                </div>
         </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright &copy; 2024 Beyond The Sky. All Rights Reserved.</p>
            </div>
        </div>
   
    );
}

export default Footer