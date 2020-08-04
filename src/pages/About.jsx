import React, { Component } from 'react';
import Maincontent from '../components/maincontent';
import Navbar from '../components/navbar';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1>This is about</h1>
                <Navbar></Navbar>
                <Maincontent></Maincontent>
                                
            </React.Fragment>
         );
    }
}
 
export default About;