import React, { Component } from 'react';
import Navbar from '../components/navbar';
import MainpageFooter from "../components/mainpagefooter";

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>                
                <Navbar/>
                <div className="body-content">
                
                </div>
                <MainpageFooter/>                
            </React.Fragment>
         );
    }
}
 
export default About;