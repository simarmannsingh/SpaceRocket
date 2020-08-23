import React, { Component } from 'react';
import Navbar from '../components/navbar';
import MainpageFooter from '../components/mainpagefooter';

class ContactSubmission extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <div className="body-content contact-form contactsubmission" >
                    <span ><i class="fas fa-5x fa-check-circle"></i></span>
                    <span><h1>Success</h1></span>
                    <span><p>Your Message has been Sent. <br/> We'll contact you shortly at the email ID you provided.<br/> Thanks for your patience.</p></span>


                </div>
                <MainpageFooter/>
            </React.Fragment>
         );
    }
}
 
export default ContactSubmission;