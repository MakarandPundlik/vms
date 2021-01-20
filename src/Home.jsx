import React from 'react';

function Home(props) {
    return (
       <section id="header" className="">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>Make Connections with <strong style={{color:'#35bd0b',fontWeight:'normal'}}>VMS Controls</strong></h1>
                        <h2 className="my-3">We are team of talented Engineers</h2>
                        <a href="" className="btn btn-get-started">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Home;