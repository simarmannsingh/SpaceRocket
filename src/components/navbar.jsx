import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import day from "../assets/day.png";
import night from "../assets/night-1.png";

class Navbar extends Component {
   
    componentDidMount() {
        window.addEventListener('load', this.navSlide);        
     }    

    navSlide = () => {
        const hamburger = document.querySelector('.hamburger-menu');
        const navlinks = document.querySelector('.navlinks');
        
        hamburger.addEventListener('click', () => {
            console.log('Firing navSlide');
            // for animating Hamburger-menu
            hamburger.classList.toggle('toggle');
            // for animating side-menu
            navlinks.classList.toggle('nav-active');
        });
      }
    
    render() { 
        return ( 
            <nav>
                <div>
                    <Link to="/"><h3 className="logo">PNBAFAC</h3></Link>
                </div>

                <div className="themes">
                    <div className="light-theme">
                        <img src={day} className="light-mode" alt=""/>                        
                    </div>
                    <div className="dark-theme">
                    <img src={night} className="dark-mode" alt=""/>
                    </div>
                </div>
                
                <ul className="navlinks">                    
                    <li>
                        <Link to="/plans" >Plans</Link>
                    </li>                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/login" style={{paddingLeft:"1em", paddingRight:"1em"}}>Login</Link>
                    </li>
                </ul>
                
                <div className="hamburger-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;