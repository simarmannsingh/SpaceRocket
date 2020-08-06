import React, { Component } from 'react';
import Maincontent from '../components/maincontent';
import Navbar from '../components/navbar';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>                
                <Navbar></Navbar>
                <Maincontent></Maincontent>
                                
            </React.Fragment>
         );
    }
}
 
export default About;