import React from 'react';
import { Link } from 'react-router-dom';
import './AllCountry.css'

const AllCountry = (props) => {
    const {name,flag} =props.allCountry;
    return (
        <div className='allCountry'>
            <h2>{name}</h2>
            <img src={flag} alt=""/>
            <p><Link to={`/country/${name}`//ay route ta dynamically dakhanor jonno ayvabe dclear kora hoyece ,akhane protek id dynamic dakhache and dynamic p[ath e ashtace]
            }><button>Show details of {name}</button></Link></p> 
        </div>
    );
};

export default AllCountry;