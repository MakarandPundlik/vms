import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
  
        
                <div className=" col-md-6 col-lg-4 col-10  mx-auto">
                    <div className="card" style={{width: "18rem"}}>
                    <img src={props.imgsrc} className="card-img-top" alt="myimage"/>
                    <div className="card-body">
                     <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.details}</p>
                     <NavLink to={props.web} className="btn btn-get-started">Visit Website</NavLink>
                    </div>
                    </div>
                 </div>
                 
             
        
    );
}

export default Card;