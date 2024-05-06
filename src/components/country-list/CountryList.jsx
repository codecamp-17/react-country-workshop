import React from 'react';

function CountryList() {
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
        <div className='country__item'>
          <div className='country__image--container'>
            <img className='country__image ' alt='flag' />
          </div>
          <div className='country__detail'>
            <h6>country name</h6>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryList;
