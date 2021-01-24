import React from 'react';
import ProgressBar from './ProgressBar';
function About(props) {
    return (
        <div>
            <div className="my-5">
            <h1 className="text-center" >We are VMS Controls</h1>
            </div>
            <h3>What Makes us Different</h3>

            <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-5">
                 <ProgressBar/>
             </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default About;