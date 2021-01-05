import React, { useEffect, useState } from 'react';
import AllCountry from '../AllCountry/AllCountry';

const Home = () => {

    const [allCountry,setAllCountry] = useState([])

    useEffect(() => {
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => setAllCountry(data) )

    },[])

    return (
        <div>
            <h2>countrys:{allCountry.length}</h2>
            {
                allCountry.map(allCountry => <AllCountry allCountry={allCountry}></AllCountry>)
            }
        </div>
    );
};

export default Home;