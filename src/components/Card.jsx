import React from 'react';


function Card(props) {
    return (
  
        
                <div className="col-10 col-md-6 col-lg-4  mx-auto">
                    <div className="card" style={{width: "18rem"}}>
                    <img src={props.imgsrc} className="card-img-top" alt={props.title}/>
                    <div className="card-body">
                     <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.details}</p>
                     <a href={props.web} className="btn btn-get-started">Visit Website</a>
                    </div>
                    </div>
                 </div>
                 
             
        
    );
}

export default Card;