import React from 'react';
import ValuesCard from './ValuesCard'
import ValuesData from './ValuesData';
function About(props) {
    return (
        <div>
            <div className="my-5">
            <h2 style={{fontWeight:'bolder'}}>Our Values</h2>
            <h4 className="my-5">Our bluebox values reflect who we are and<br/>what we stand for as a company</h4> 
            <hr />
            {
                ValuesData.map((val)=>{
                    return(
                        <ValuesCard 
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