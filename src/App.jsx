import { useState, useEffect } from 'react';
import './App.css';
import { getData } from './services/WeatherService'
import Weather from './components/Weather';
import Search from './components/Search';

function App() {
  const [userInput, setUserInput] = useState('');
  const [city, setCity] = useState(userInput);
  const [weatherData, setWeatherData] = useState({});
 // const [timeOfDay, setTimeOfDay] = useState(''); // morning, afternoon, evening, night

  const resetData = () => {
    setWeatherData({});
    setCity('');
    setUserInput('');
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
      {(Object.keys(weatherData).length !== 0) ? <Weather data={weatherData} resetData={resetData} /> : <Search userInput={userInput} setUserInput={setUserInput} setCity={setCity} />}
    </div>
  );
}

export default App;
