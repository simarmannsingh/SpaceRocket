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
                    <span><p>Name*</p> <input type="text" required/></span>
                    <span><p>Email*</p> <input type="email" required/></span>
                    <span><p>Message*</p> <input type="text" className="contact-form-message" required/></span>
                    <button type="submit" className="btn-secondary"> Submit</button>
                </form>



                <MainpageFooter/>
            </React.Fragment>
         );
    }
}
 
export default Contactus;