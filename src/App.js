import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h1>Countries Loaded: {countries.length}</h1>
      <ul>
        {
          countries.map(country => <li>{country.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
