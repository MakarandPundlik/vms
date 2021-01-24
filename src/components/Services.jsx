import React from 'react';

import Card from './Card';
import CardData from './CardData';
function Services(props) {
    return (
        <div>
            <div className="my-5">
            <h1 className="text-center" style={{color:'#106d75',fontWeight:'normal'}}>We are Experienced in</h1>
            <hr style={{color:' #106d75',margin:'3rem'}}/>
            </div>

           
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-5">
                 {
                     CardData.map((val,index)=>{
                         return <Card 
                         key={index}
                         imgsrc={val.imgsrc}
                         title={val.title}
                         details={val.details}
                         web={val.web}
                         />
                     })
                 }
             </div>
        </div>
        </div>
        </div>
        
        </div>
    );
}

export default Services;