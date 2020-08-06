import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SecondaryContent extends Component {    
    render() { 
        return ( 
            <React.Fragment>
                <section>
                    <div className="secondary-content">                        
                        <div className="section-secondary">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis at recusandae culpa nobis quisquam architecto ab, vel minima fugit assumenda quos harum rem porro obcaecati voluptatibus sapiente est molestias perspiciatis modi ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis at recusandae culpa nobis quisquam architecto ab, vel minima fugit assumenda quos harum rem porro obcaecati voluptatibus sapiente est molestias perspiciatis modi ratione</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor necessitatibus esse temporibus aspernatur commodi aliquam ad, optio, incidunt, doloremque explicabo. Nisi excepturi sequi, cumque dicta placeat similique minima perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis at recusandae culpa nobis quisquam architecto ab, vel minima fugit assumenda quos harum rem porro obcaecati voluptatibus sapiente est molestias perspiciatis modi ratione</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor necessitatibus esse temporibus aspernatur commodi aliquam ad, optio, incidunt, doloremque explicabo. Nisi excepturi sequi, cumque dicta placeat similique minima perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis at recusandae culpa nobis quisquam architecto ab, vel minima fugit assumenda quos harum rem porro obcaecati voluptatibus sapiente est molestias perspiciatis modi ratione</p>
                        </div>
                        <button className="btn-secondary" type='submit'>                            
                            <Link to="/pricing" className="Link"> Sign up Now</Link>
                        </button>
                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default SecondaryContent;