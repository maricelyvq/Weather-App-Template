const Weather = ( { data, resetData } ) => {
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const convertUnix = (timestamp) => {
    const ts = new Date(timestamp * 1000);
    const hh = ts.getHours().toString().padEnd(2, '0');
    const mm = ts.getMinutes().toString().padEnd(2, '0');
    return `${hh}:${mm}`
  }
  return (
    <>
      <div id='top-half'>
        <div>
          <p id='temp'>{data.main.temp}</p>
          <p id='temp-desc'>{data.weather[0].description}</p>
          {/* icon example */}
          <img src={iconUrl} alt='Weather Icon' />
        </div>
        <div>
          <p id='search-term'>{data.name}, {data.sys.country}</p>
        </div>
      </div>
      <div id='bottom-half'>
        <div>
          <h2>
            Weather Details
          </h2>
        </div>
        <div>
          <p id='dt'>Current: {convertUnix(data.dt)}</p>
          <p id='humidity'>Humidity: {data.main.humidity}</p>
          <p id='wind-speed'>Wind Speed: {data.wind.speed}</p>
          <p id='pressure'>Pressure: {data.main.pressure}</p> 
        </div>
      </div>
      {/* bonus button */}
      <button onClick={resetData}>Reset</button>
    </>
  )
}

export default Weather;