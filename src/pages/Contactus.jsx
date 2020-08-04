import React, { Component } from 'react';
import Maincontent from '../components/maincontent';
import Navbar from '../components/navbar';

class Contactus extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1>This is Contact us</h1>
                <Navbar></Navbar>
                <Maincontent></Maincontent>
                                
            </React.Fragment>
         );
    }
}
 
export default Contactus;