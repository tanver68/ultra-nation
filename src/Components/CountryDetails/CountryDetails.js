import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
var dd=[];
const CountryDetails = () => {
    const {countryName} = useParams()
    const [country,setCountry] = useState([])
    useEffect(()=>{
       const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
       fetch(url)
       .then(res => res.json())
       .then(data =>{setCountry(data[0])})
       
    },[])
    const {name,area,topLevelDomain,callingCodes,capital,region,subregion,population,latlng} = country;
    return (
        <div>
            <h3>Country Name: {name}</h3>
            <p>Area:{area}</p>
            <p>Capital: {capital} </p>
            <p>Region: {region} </p>
            <p>Sub Region: {subregion} </p>
            <p>Population: {population} </p>
            <p>Domain: {topLevelDomain}</p>
            <p>Calling Code :  {callingCodes}</p>
            <p>LatLng: {latlng} </p>
            

        </div>
    );
};

export default CountryDetails;