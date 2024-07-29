import React, { useState } from 'react';
// import Landnav from './Landnav';
import agraimg from '../cityicons/agra.png';
import ahmedimg from '../cityicons/ahmedabad.png';
import amritsarimg from '../cityicons/amritsar.png';
import bengaluruimg from '../cityicons/bengaluru.png';
import chennaiimg from '../cityicons/chennai.png';
import delhiimg from '../cityicons/delhi.png';
import coimbatoreimg from '../cityicons/coimbatore.png';
import goaimg from '../cityicons/goa.jpg';
import hyderabadimg from '../cityicons/hyderabad.png';
import jaipurimg from '../cityicons/jaipur.png';
import kochiimg from '../cityicons/kochi.png';
import kolkataimg from '../cityicons/kolkata.png';
import mumbaiimg from '../cityicons/mumbai.jpg';
import nagpurimg from '../cityicons/nagpur.png';
import vijayawadaimg from '../cityicons/vijayawada.png';
import vskpimg from '../cityicons/visakhapatnam.jpg';
// import BannerBackground from '../homebanner.png';
// import leftbanner from '../about-background.png';
import ReactSelect from 'react-select';
import cityimg from '../assets/citiesimage.jpg';
import './CitiesStyles.css';
import { Link } from 'react-router-dom';

const cityIcons = {
  'Agra': <img src={agraimg} alt="Agra" className="city-icon"/>,
  'Ahmedabad': <img src={ahmedimg} alt="Ahmedabad" className="city-icon"/>,
  'Amritsar': <img src={amritsarimg} alt="Amritsar" className="city-icon"/>,
  'Bengaluru': <img src={bengaluruimg} alt="Bengaluru" className="city-icon"/>,
  'Chennai': <img src={chennaiimg} alt="Chennai" className="city-icon"/>,
  'Coimbatore': <img src={coimbatoreimg} alt="Coimbatore" className="city-icon"/>,
  'Delhi': <img src={delhiimg} alt="Delhi" className="city-icon"/>,
  'Goa': <img src={goaimg} alt="Goa" className="city-icon"/>,
  'Hyderabad': <img src={hyderabadimg} alt="Hyderabad" className="city-icon"/>,
  'Jaipur': <img src={jaipurimg} alt="Jaipur" className="city-icon"/>,
  'Kochi': <img src={kochiimg} alt="Kochi" className="city-icon"/>,
  'Kolkata': <img src={kolkataimg} alt="Kolkata" className="city-icon"/>,
  'Mumbai': <img src={mumbaiimg} alt="Mumbai" className="city-icon"/>,
  'Nagpur': <img src={nagpurimg} alt="Nagpur" className="city-icon"/>,
  'Vijayawada': (<a href="/vijayawada"><img src={vijayawadaimg} alt="Vijayawada" className="city-icon"/></a>),
  'Visakhapatnam': (<a href="/visakhapatnam"><img src={vskpimg} alt="Visakhapatnam" className="city-icon"/></a>),
};

const cityNames = Object.keys(cityIcons);
const CityButtons = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = () => {
    if (selectedCity) {
      window.location.href = `/${selectedCity.toLowerCase()}`;
    }
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  const options = cityNames.map(cityName => ({
    label: cityName,
    value: cityName,
  }));

  return (
    <div className="image">
        <img alt="img" src={cityimg}/>
        <div className="cities">
        <h1>Popular Cities</h1>
        {cityNames.map(cityName => (
          // <Link to="/{cityName}">
          <button key={cityName} className="city-button">
            {cityIcons[cityName]}
            <span className="city-name">{cityName}</span>
          </button>
          // </Link>
        ))}
      </div>
    

    </div>
    );
};
export default CityButtons;