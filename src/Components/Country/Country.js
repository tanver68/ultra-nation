import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,region,flag} = props.country
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country">
            <h2>This is : {name} </h2>
            <img src={flag} alt=""/>
            <p>Here Population : {population}</p>
            <p><small>This Region : {region}</small></p>
            <button onClick={ () => handleAddCountry(props.country)} >Add button</button> 
            
            {/* click korar pore amra country take app.js e pathachi ,akhn app.js e giya recive korte hobe  */}
        </div>
    );
};

export default Country;