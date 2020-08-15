import React, { Component } from 'react';
import Navbar from '../components/navbar';
import MainpageFooter from '../components/mainpagefooter';

class Contactus extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>                
                <Navbar/>
                <div className="body-content">
                <form className="contact-form">
                    <span>
                        <p>Name*</p>
                        <input className="contact-form-elements" type="text" required placeholder="Enter you name"/>
                    </span>
                    <span>
                        <p>Email*</p>
                        <input className="contact-form-elements" type="email" required placeholder="Enter you Email Address"/>
                    </span>
                    <span>
                        <p>Message*</p>
                        <textarea className="contact-form-elements" name="contactus-message" id="contactus-message" cols="90" rows="10" 
                                  required placeholder="Enter you message here">
                        </textarea>
                    </span>
                    <button type="submit" className="btn-secondary" style={{marginTop:'1em'}}> Submit</button>
                </form>
                </div>
                <MainpageFooter/>
            </React.Fragment>
         );
    }
}
 
export default Contactus;