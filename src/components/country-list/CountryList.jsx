import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryList() {
  const [allCountries, setAllCountries] = useState([]);

  const fetchAllCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data.map((country) => {
        // Obj Response => Obj {name:Name,flags:Flags}
        let obj = {};
        obj.name = country.name;
        obj.flags = country.flags;
        // #1
        return obj;
      });
      // #2
      setAllCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // #3
    fetchAllCountries();
  }, []);
  return (
    <main className='main'>
      <header className='header'>
        <h1 className='header__text'>Find Your Destination</h1>
      </header>
      <div className='search'>
        <input className='search__input' />
        <button className='search__btn'>search</button>
      </div>
      <div className='country'>
        {allCountries.length > 0 &&
          allCountries.map((country) => (
            <div className='country__item'>
              <div className='country__image--container'>
                <img className='country__image' src={country.flags.png} alt={country.flags.alt} />
              </div>
              <div className='country__detail'>
                <h6>{country.name.common}</h6>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default CountryList;
