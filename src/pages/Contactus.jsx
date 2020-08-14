import React, { Component } from 'react';
import Navbar from '../components/navbar';
import MainpageFooter from '../components/mainpagefooter';

class Contactus extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>                
                <Navbar/>

                <form className="contact-form">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Your Message" className="contact-form-message"/>
                    <button type="submit"> Submit</button>
                </form>



                <MainpageFooter/>
            </React.Fragment>
         );
    }
}
 
export default Contactus;