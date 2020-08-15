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
                <div className="body-content">
                <Maincontent/>
                <SecondaryContent/>
                </div>
                <MainpageFooter/>                                
            </React.Fragment>
         );
    }
}
 
export default HomePage;