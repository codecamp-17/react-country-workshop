/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.scss';
import BucketList from './components/bucket-list/BucketList';
import CountryDetail from './components/country-detail/CountryDetail';
import CountryList from './components/country-list/CountryList';

// Schema Country  : {name:Name,flags:Flags}
function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null); // null | Country
  // Fetch เสร็จให้เอาประเทศแรกเป็น selectedCountry (3Min)
  return (
    <div className='app'>
      <CountryList
        allCountries={allCountries}
        setAllCountries={setAllCountries}
        setSelectedCountry={setSelectedCountry}
      />
      <CountryDetail />
      <BucketList />
    </div>
  );
}

export default App;
