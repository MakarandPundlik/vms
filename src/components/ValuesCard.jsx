import React from 'react';

function ValuesCard(props) {
    return (
        <div className="text-center my-5">
            
            <h4><b>{props.title}</b></h4>
            <h4>{props.text}</h4>
        </div>
    );
}

export default ValuesCard;