import { useState, useEffect } from 'react';
import './App.css';
import { getData } from './services/WeatherService'
import Weather from './components/Weather';
import Search from './components/Search';

function App() {
  const [userInput, setUserInput] = useState('');
  const [city, setCity] = useState(userInput);
  const [weatherData, setWeatherData] = useState({});

  const resetData = () => {
    setWeatherData({});
  } // reset weatherData object

  useEffect(() => {
    const fetchData = async () => {
      const cData = await getData(city);
      if(cData){
        setWeatherData(cData);
      }
    }
    if(city){
      fetchData();
    }
  }, [city]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Path2Tech Weather App</h1>
        {(Object.keys(weatherData).length !== 0) ? <Weather data={weatherData} resetData={resetData} /> : <Search userInput={userInput} setUserInput={setUserInput} setCity={setCity} />}
      </header>
    </div>
  );
}

export default App;
