import React, { Component } from 'react';
import Navbar from '../components/navbar';


class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <div className="body-content">  

                    <form action="submit" className="login-form">
                        <div className="fa-5x">
                            <i class="fas fa-user-circle"></i>
                        </div>                        
                        <div className="login-emain">
                            <i class="fas fa-user symbol"></i>
                            <input type="email" name="email-address" placeholder="Enter Email" id="email" required/>
                        </div>
                        <div className="password">
                            <i class="fas fa-key symbol"></i>
                            <input type="password" name="password" placeholder="Enter password" id="password" required/>
                        </div>
                        <button type="submit" className="btn-main" style={{margin:"1em",border:"1px solid black" ,fontSize:"18px"}} >Login</button>
                    </form>

                </div>                
            </React.Fragment>
         );
    }
}
 
export default LoginPage;