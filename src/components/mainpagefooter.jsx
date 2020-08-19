import React, { Component } from 'react';

class MainpageFooter extends Component {    
    render() { 
        return ( 
            <React.Fragment>
                <div className="footer">

                    <div className="contact-details">
                        <p> House number 17-47,<br/>Jyoti Nagar</p>
                        <p>North Lalaguda,<br/>Secunderabad-17</p>
                        <p>Andhra Pradesh, India</p>
                    </div>

                    
                    <div className="middle-content">                        
                            <ul className="col1">
                                <li>Management</li>
                                <li>Data Security</li>
                                <li>Careers</li>
                            </ul>
                            <ul className="col2">
                                <li>Community</li>
                                <li>Email Support</li>
                                <li>Online Support</li>
                                <li>Imprint</li>
                            </ul>                        
                    </div>

                    <div className="social-media">                        
                        <span>
                            <a href="https://facebook.com/pnbafac">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://twitter.com/pnbafac">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://instagram.com/pnbafac">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://youtube.com/pnbafac">
                                <i className="fab fa-youtube-square"></i>
                            </a>
                        </span>                        
                    </div>                    
                </div>                
                <div className="developer-details">
                    <span>
                        <p>Made with <i className="fas fa-heart"></i> by <a style={{textDecoration:"underline",color:"var(--text-primary)"}} target="blank" 
                                href="https://github.com/simarmannsingh">Simar</a>
                        </p>
                    </span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MainpageFooter;