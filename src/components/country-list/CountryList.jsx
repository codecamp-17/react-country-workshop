import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryItem from './CountryItem';

function CountryList() {
  // 1st Run (initState), # 8th (allCountries !== []) from #7
  const [allCountries, setAllCountries] = useState([]);

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

        return obj;
      });
      // #7 : SetState => Trigger Rerender
      setAllCountries(data);
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
            <CountryItem country={country}/>
          ))}
      </div>
    </main>
  );
}

export default CountryList;
