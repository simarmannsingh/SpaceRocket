import React, { Component } from 'react';

//  importing Component
import Navbar from '../components/navbar';
import Maincontent from '../components/maincontent';
import SecondaryContent from '../components/secondarycontent';
import MainpageFooter from '../components/mainpagefooter';

class HomePage extends Component {    
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <Maincontent/>
                <SecondaryContent/>
                <MainpageFooter/>                                
            </React.Fragment>
         );
    }
}
 
export default HomePage;