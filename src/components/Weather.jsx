import '/src/App.css'
import humidityIcon from '../assets/icons/humidity.png';
import windIcon from '../assets/icons/wind.png';
import pressureIcon from '../assets/icons/pressure.png';

const Weather = ({ data, resetData }) => {
  const icon = data.weather[ 0 ].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const convertUnix = (timestamp) => {
    const ts = new Date(timestamp * 1000);
    let hh = ts.getHours();
    const mm = ts.getMinutes().toString().padStart(2, '0');
    const ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    return `${hh}:${mm} ${ampm}`;
  };
  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <>
      <div id='top-half'>
        <div class='time'>
          <p>Current Weather</p>
          <p id='dt'>  { convertUnix(data.dt) }</p>
        </div>
        <div>
          <div id="city-name">
            <p id='search-term'>{ data.name }, { data.sys.country }</p>
          </div>
          <div class='icon'>
            <img src={ iconUrl } alt='Weather Icon' />
            <p id='temp'> { data.main.temp } °F </p>
          </div>
          <div class='description'>
            <p id='temp-desc'>{ capitalize(data.weather[ 0 ].description) }</p>
          </div>
        </div>
      </div>
      <div id='bottom-half' class='grid-container'>
        <div class='grid-item'>
          <img src={ humidityIcon } alt="humidity" />
          <p id='humidity'>Humidity: { data.main.humidity } %</p>
        </div>
        <div class='grid-item'>
          <img src={ windIcon } alt="wind speed" />          <p id='wind-speed'>Wind Speed: { data.wind.speed } mi</p>
        </div>
        <div class='grid-item'>
          <img src={ pressureIcon } alt="pressure"/>           
          <p id='pressure'>Pressure: { data.main.pressure } in </p>
        </div>
     

      <div id='reset'>
      <button className="pretty-reset" onClick={resetData}>See a different City?</button>
    </div>
   </div>
    </>
  )
}

export default Weather;