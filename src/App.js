import { useEffect, useState } from 'react';
import './App.css';
import DisplayValues from './Components/DisplayValues';
import IPInput from './Components/IpInput';
import Map from './Components/Map';

function App() {

  const [ip, setIp] = useState("");
  const [city, setCity] = useState("Loading...")
  const [country, setCountry] = useState("Loading...")
  const [postalcode, setPostalcode] = useState("Loading...")
  const [timezone, setTimezone] = useState("Loading...")
  const [isp, setISP] = useState("Loading...")
  const [coordinates, setCoordinates] = useState([18.79038, 98.98468])

 /* useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_WFzeE0kMyAo0pYv3HItVeZvoXdk97&ipAddress=${ip}`)
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip)
        setCity(data.location.city)
        setCountry(data.location.country)
        setPostalcode(data.location.postalCode)
        setTimezone(data.location.timezone)
        setISP(data.isp)
        setCoordinates([data.location.lat, data.location.lng])
      })
  },[]) */
  return (
  <main className='container'>
    <div className='row blue-background'>
      <h1 className='header'>IP Adress Tracker</h1>
      <IPInput ip={ip} setIp={setIp} setCity={setCity} setCountry={setCountry} setPostalcode={setPostalcode} setTimezone={setTimezone} setISP={setISP} />
      <DisplayValues ip={ip} city={city} country={country} postalcode={postalcode} timezone={timezone} isp={isp} />
    </div>
    <div className='row map-background'>
      <Map coordinates={coordinates} />
    </div>
  </main>
  );
}

export default App;
