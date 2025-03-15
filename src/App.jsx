import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getData } from './services/WeatherService';
import Weather from './components/Weather';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [userInput, setUserInput] = useState('');
  const [city, setCity] = useState(userInput);
  const [weatherData, setWeatherData] = useState({});

  const resetData = () => {
    setWeatherData({});
    setCity('');
    setUserInput('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const cData = await getData(city);
      if (cData) {
        setWeatherData(cData);
      }
    };
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Search userInput={userInput} setUserInput={setUserInput} setCity={setCity} />} />
          <Route path="/weather" element={<Weather data={weatherData} resetData={resetData} />} />
        </Routes>
        <Footer/>
      </div>
  
  );
}

export default App;
