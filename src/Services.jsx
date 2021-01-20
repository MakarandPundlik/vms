import React from 'react';
import { NavLink } from 'react-router-dom';

function Services(props) {
    return (
        <div>
            <div className="my-5">
            <h1 className="text-center" style={{color:'#106d75',fontWeight:'normal'}}>Our Services</h1>
            <hr style={{color:' #106d75',margin:'3rem'}}/>
            </div>

           
        <div className="container-fluid">
        <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-4 col-10 mx-auto">

                <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
            
                </div>

                
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Services;