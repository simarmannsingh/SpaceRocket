import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    
    // constructor(props){
    //     super(props);
    //     this.navSlide = this.navSlide.bind(this);
    // }

    componentDidMount() {
        window.addEventListener('load', this.navSlide);
     }
    

    navSlide = () => {
        const hamburger = document.querySelector('.hamburger-menu');
        const navlinks = document.querySelector('.navlinks');
        
        hamburger.addEventListener('click', () => {
          navlinks.classList.toggle('nav-active');
          console.log('navSlide is firing');
        });
      }
    
    
    render() { 
        return ( 
            <nav>
                <div>
                    <Link to="/"><h3 className="logo">BrandName</h3></Link>
                </div>
                
                <ul className="navlinks">                    
                    <li>
                        <Link to="/plans" >Plans</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact us</Link>
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