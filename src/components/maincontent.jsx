import React, { Component } from 'react';
import bgmain from "../assets/bg-main.png";
import {Link} from 'react-router-dom';

class Maincontent extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <section>
                    <div className="main-content">

                        <div className="left-grid">
                            <h1>Pendyala Nritya Bharathi <br/> Academy of Fine Arts</h1><br/>
                            <h3>Dr. Sanagavarapu Purushottama Bharathi</h3><br/>
                            <button type="button" className="btn-main">
                                <Link to="/plans" className="Link">Start Here</Link>
                            </button>
                        </div>

                        <div className="right-grid">
                            <span>
                                <img src={bgmain} alt="bg-mains"/>
                            </span>
                        </div>

                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default Maincontent;