import React, { Component } from 'react';

class MainpageFooter extends Component {    
    render() { 
        return ( 
            <React.Fragment>
                <div className="tertiary-content">
                    <div className="contact-details">
                        <p> House number 17-47, Jyoti Nagar</p>
                        <p>North Lalaguda, Secunderabad-17</p>
                        <p>Andhra Pradesh, India</p>
                    </div>
                    <div className="middle-content">

                    </div>
                    <div className="social-media">                        
                        <span>
                            <a href="https://facebook.com/simarms">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://twitter.com/simarmannsingh">
                                <i class="fab fa-twitter-square"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://instagram.com/simarmannsingh">
                                <i class="fab fa-instagram-square"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://youtube.com/simarmannsingh">
                                <i class="fab fa-youtube-square"></i>
                            </a>
                        </span>                        
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MainpageFooter;