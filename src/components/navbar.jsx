import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <div>
                    <Link to="/"><h3 className="logo">BrandName</h3></Link>
                </div>
                <ul className="navlinks">                    
                    <li>
                        <Link to="/plans">Plans</Link>
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
                    <li>
                    <div className="hamburger-menu">
                   
                   </div></li>                    
                </ul>
                
            </nav>
         );
    }
}
 
export default Navbar;