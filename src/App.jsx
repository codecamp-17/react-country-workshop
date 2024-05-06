/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.scss';
import BucketList from './components/bucket-list/BucketList';
import CountryDetail from './components/country-detail/CountryDetail';
import CountryList from './components/country-list/CountryList';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  return (
    <div className='app'>
      <CountryList allCountries={allCountries} setAllCountries={setAllCountries} />
      <CountryDetail />
      <BucketList />
    </div>
  );
}

export default App;
