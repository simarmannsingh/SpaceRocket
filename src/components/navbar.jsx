import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
                <a href="#">Homie</a>    
                <ul className="navlinks">
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">Contact us</a></li>
                </ul>
                
            </div>
         );
    }
}
 
export default Navbar;