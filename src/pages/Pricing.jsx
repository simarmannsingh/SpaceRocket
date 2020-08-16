import React, { Component } from 'react';
import Navbar from "../components/navbar";
import MainpageFooter from "../components/mainpagefooter";
import plan1 from "../assets/drawing.svg";
import plan2 from "../assets/drawing-1.svg";
import plan3 from "../assets/drawing-2.svg";


class Pricing extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <div className="body-content pricing">
                    
                    <div className="card">
                        <h5>Plan 1</h5>
                        <img src={plan1} alt=""/>
                        <p> Price : Rs. 1599/-</p>
                    </div>

                    <div className="card">
                        <h5>Plan 2</h5>
                        <img src={plan2} alt=""/>
                        <p> Price : Rs. 1999/-</p>
                    </div>

                    <div className="card">
                        <h5>Plan 3</h5>
                        <img src={plan3} alt=""/>
                        <p> Price : Rs. 2499/-</p>
                    </div>
                    
                </div>
                <MainpageFooter/>
            </React.Fragment>
         );
    }
}
 
export default Pricing;