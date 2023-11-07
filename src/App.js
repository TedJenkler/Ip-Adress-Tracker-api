import { useEffect, useState } from 'react';
import './App.css';
import DisplayValues from './Components/DisplayValues';
import IPInput from './Components/IpInput';
import Map from './Components/Map';

function App() {

  const [ip, setIp] = useState("203.150.179.106");
  const [city, setCity] = useState("Bangkok")
  const [country, setCountry] = useState("Thailand")
  const [postalcode, setPostalcode] = useState("10100")
  const [timezone, setTimezone] = useState("-06:00")
  const [isp, setISP] = useState("SpaceX Starlink")

  // useEffect(() => {
   // fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_WFzeE0kMyAo0pYv3HItVeZvoXdk97&ipAddress=${ip}`)
   //   .then((response) => response.json())
   // .then((data) => console.log(data))
 // },[])
  return (
  <main className='container'>
    <div className='row blue-background'>
      <h1>IP Adress Tracker</h1>
      <IPInput ip={ip} setIp={setIp} />
      <DisplayValues ip={ip} city={city} country={country} postalcode={postalcode} timezone={timezone} isp={isp} />
    </div>
    <div className='row map-background'>
      <Map />
    </div>
  </main>
  );
}

export default App;
