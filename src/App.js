import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries,setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data)) //akhane 250 countries er data gulo countries er vitor set kora hoyce .r set korar jonno setCountries k call kore tar vitor data tak pathay delam
    .catch(error => console.log(error))
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <h1>Countri loaded:{countries.length}</h1> 
      {
        countries.map(country => <Country name={country.name} ></Country>)// child componants: akhane <Country></Country> hoche child components ,karon data ace app .js er vitor r amra app.js er vitor Country component use kortaci tay ata child componants 
      }
       
        
      </header>
    </div>
  );
}

export default App;
