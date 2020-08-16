import React, { Component } from 'react';
import Navbar from '../components/navbar';
import MainpageFooter from "../components/mainpagefooter";

class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <div className="body-content">

                    <form action="submit">
                        <div className="login-emain">
                            <i class="fas fa-user"></i>
                            <input type="text"/>
                        </div>
                    </form>

                </div>
                <MainpageFooter/>
            </React.Fragment>
         );
    }
}
 
export default LoginPage;