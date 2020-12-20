import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data)) //akhane 250 countries er data gulo countries er vitor set kora hoyce .r set korar jonno setCountries k call kore tar vitor data tak pathay delam
    .catch(error => console.log(error))
  },[])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country]; 
                //akhane ...cart :mane copy korlam ,copy kore bosiye fdelam ,ay line er mane purangulo boshlo r notun (country) takeo bosai delam
              //country.js j information ashlo ta amra (country) ay parameter e  recive kore console kore show korlam
    setCart(newCart);
  }
  


  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Countri loaded:{countries.length}</h1> 
      <h4>Country Added :{cart.length} </h4>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code} ></Country>)// child componants: akhane <Country></Country> hoche child components ,karon data ace app .js er vitor r amra app.js er vitor Country component use kortaci tay ata child componants 
      }
       
        
      </header>
    </div>
  );
}

export default App;
