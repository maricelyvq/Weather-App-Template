const Weather = ({ data }) => {
  const convertUnixTime = (unixTime) => {
    const milliseconds = unixTime * 1000;
    return (
        <div>
        <h1>Weather</h1>
        <p>City: {data.name}</p>
        <p>Temperature: {data.main.temp}</p>
        <p>Feels like: {data.main.feels_like}</p>
        <p>Humidity: {data.main.humidity}</p>
        <p>Weather: {data.weather[0].description}</p>
        </div>
    );
    }