import React from 'react';
import { NavLink } from 'react-router-dom';
import homepage from '../../src/images/homepage.gif'
function Home(props) {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row col-lg-12">
                    <div className="col-lg-6 lg-oder-2 myrow" style={{ marginTop: '5%' }}>
                        <h1>The <b>P</b>rogrammable <b>L</b>ogic <b>C</b>ompany</h1>
                        <h2>Empowered by Innovation</h2>
                        <NavLink to="/about" className="btn btn-get-started mt-3">Get Started</NavLink>
                    </div>
                    <div className="col-lg-6 lg-order-1 myrow ">
                        <img src={homepage} alt="homepage" style={{ width: '100%', height: '110%' }} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;