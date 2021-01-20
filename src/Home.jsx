import React from 'react';
import { NavLink } from 'react-router-dom';
import homepage from '../src/images/homepage.gif'
function Home(props) {
    return (
       <section id="header" className="d-flex align-items-center">
           <div className="col-lg-6 ">
              <h1>Something about company</h1>
           </div>
           <div className="col-lg-6  ">
               <img src={homepage} alt="homepage" style={{width:'90%',height:'70%'}}/>
            </div>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>Make Connections with <strong style={{color:'#35bd0b',fontWeight:'normal'}}>VMS Controls</strong></h1>
                        <h2 className="my-3">We are team of talented Engineers</h2>
                        <NavLink to="/aboutus" className="btn btn-get-started">Get Started</NavLink>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2 ">
                        <img src={homepage_2} alt="homepage"/>
                    </div>
                    </div>
                </div>
            </div>
        </div> */}
        </section>
    );
}

export default Home;