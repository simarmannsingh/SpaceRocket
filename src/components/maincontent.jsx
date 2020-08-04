import React, { Component } from 'react';
import spaceship from "../assets/spaceship.svg"


class Maincontent extends Component {
    
    render() { 
        return ( 
            <div className="main-content">

                <div className="left-grid">
                   <h1>Welcome to <u>Planet Earth</u></h1>
                   <h4>We bet you cannot return to your planet.</h4>
                   <button type="button" className="btn-area1">Start here</button>
                </div>

                <div className="right-grid">
                   <span className="main-image">
                    <img src={spaceship} alt="spaceships"/>
                   </span>
                </div>

            </div>
         );
    }
}
 
export default Maincontent;