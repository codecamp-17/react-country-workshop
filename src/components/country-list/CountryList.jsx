import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryItem from './CountryItem';

function CountryList({ allCountries, setAllCountries, setSelectedCountry }) {
  // 0th : Props
  // 1st Run (initState), # 8th (allCountries !== []) from #7

  useEffect(() => {
    // 4th : Fetch
    fetchAllCountries();

    return () => {
      // #11 : Clean Up #4
    };
  }, []);

  // 2nd (Declare, Register FN) , 9th ReDeclare FN
  const fetchAllCountries = async () => {
    try {
      // # 5th
      const response = await axios.get('https://restcountries.com/v3.1/all');

      // Obj Response => Obj {name:Name,flags:Flags}
      // # 6th
      const data = response.data.map((country) => {
        let obj = {};
        obj.name = country.name;
        obj.flags = country.flags;
        obj.region = country.region;
        obj.population = country.population;
        obj.capital = country.capital;
        obj.languages = country.languages;
        obj.borders = country.borders;
        obj.currencies = country.currencies;
        return obj;
      });
      // #7 : SetState => Trigger Rerender
      setAllCountries(data);
      setSelectedCountry(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // 3rd Render, 10th Rerender
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
            <CountryItem key={country.name.official} country={country} />
          ))}
      </div>
    </main>
  );
}

export default CountryList;
