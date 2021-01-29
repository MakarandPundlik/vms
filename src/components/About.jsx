import React from 'react';
import ValuesCard from './ValuesCard'
import ValuesData from './ValuesData';
function About(props) {
    return (
        <div>
             <div className="my-5 mx-2 text-center">
                 <h2 style={{fontWeight:'bold'}}>We are VMS Controls and we build Control Panels</h2>
                 <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Sed sodales, felis sed lobortis elementum, ante nisl accumsan lorem, eget interdum ante sem ut tortor. Proin ex augue, maximus et bibendum ut, aliquam eget metus. Nullam varius, nunc eu dictum pulvinar, lacus orci feugiat felis, at pretium purus mi id augue. 
                     Integer iaculis sodales volutpat. Curabitur a ante malesuada, pharetra ipsum id, consectetur arcu. Morbi in felis et mi hendrerit ornare a ac mauris. Cras vitae dolor imperdiet, cursus lacus vel, efficitur turpis. Proin fermentum ante sit amet dignissim sagittis.
                      Vestibulum aliquam luctus sagittis. Donec eu libero a nunc venenatis varius eu vitae libero. Aenean feugiat tristique augue, ac volutpat velit auctor eget.</p>
                      <h4 className="text-right">- Milind Pundlik<br/><h5>proprietor VMS Controls</h5></h4>
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