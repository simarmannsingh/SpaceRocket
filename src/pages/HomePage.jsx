import React, { Component } from 'react';
import Maincontent from '../components/maincontent';
import Navbar from '../components/navbar';
import SecondaryContent from '../components/secondarycontent';
import TertiaryContent from '../components/tertiarycontent';

class HomePage extends Component {    
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <Maincontent/>
                <SecondaryContent/>
                <TertiaryContent/>                                
            </React.Fragment>
         );
    }
}
 
export default HomePage;