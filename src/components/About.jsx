import React from 'react';
import ValuesCard from './ValuesCard'
import ValuesData from './ValuesData';
function About(props) {
    return (
        <div>
             <div className="my-5 mx-2 text-center ">
                 <h2 style={{fontWeight:'bold'}}>We are VMS Controls and we build Control Panels</h2>
                 <hr/>
             </div>
            <div className="my-5 mx-2 text-center ">
                <h2 style={{fontWeight:'bolder'}}>Our Vision</h2>
                <h4 className="my-5">To be the most valued global providers of Innovative Industrial Automation</h4>
                <hr/>
            </div>
            <div className="my-5 mx-2 text-center">
            <h2 style={{fontWeight:'bolder'}}>Our Values</h2>
            <h4 className="my-5">Our bluebox values reflect who we are and<br/>what we stand for as a company</h4> 
            
            {
                ValuesData.map((val)=>{
                    return(
                        <ValuesCard 
                            key={Math.random()*10}
                            title={val.title}
                            text={val.text}
                        />
                    )
                })
            }
            </div>
           
        </div>
        
    );
}

export default About;