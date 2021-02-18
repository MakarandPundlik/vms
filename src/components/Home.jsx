import React from 'react';
import { NavLink } from 'react-router-dom';

function Home(props) {
    return (
        <div className="text-center">
            
            <div className="card">
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                <h2 style={{ fontWeight: 'bold' }}>We are VMS Controls and we build Control Panels</h2>
                <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed sodales, felis sed lobortis elementum, ante nisl accumsan lorem, eget interdum ante sem ut tortor. Proin ex augue, maximus et bibendum ut, aliquam eget metus. Nullam varius, nunc eu dictum pulvinar, lacus orci feugiat felis, at pretium purus mi id augue.
                Integer iaculis sodales volutpat. Curabitur a ante malesuada, pharetra ipsum id, consectetur arcu. Morbi in felis et mi hendrerit ornare a ac mauris. Cras vitae dolor imperdiet, cursus lacus vel, efficitur turpis. Proin fermentum ante sit amet dignissim sagittis.
                      Vestibulum aliquam luctus sagittis. Donec eu libero a nunc venenatis varius eu vitae libero. Aenean feugiat tristique augue, ac volutpat velit auctor eget.</p>
                <h4 className="text-right">- Milind Pundlik<br /><h5>Proprietor VMS Controls</h5></h4>

                </div>
            </div>
            </div>
        </div>
        // <section id="header" className="d-flex align-items-center">
        //     <div className="container-fluid">
        //         <div className="row col-lg-12">
        //             <div className="col-lg-6 lg-oder-2 myrow" style={{ marginTop: '5%' }}>
        //                 <h1>The <b>P</b>rogrammable <b>L</b>ogic <b>C</b>ompany</h1>
        //                 <h2>Empowered by Innovation</h2>
        //                 <NavLink to="/about" className="btn btn-get-started mt-3">Get Started</NavLink>
        //             </div>
        //             <div className="col-lg-6 lg-order-1 myrow ">
        //                 <img src={homepage} alt="homepage" style={{ width: '100%', height: '110%' }} />
        //             </div>

        //         </div>
        //     </div>
        // </section>
    );
}

export default Home;