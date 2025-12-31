// src/App.jsx
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '3aa4bf838d804c0cb33120407240902';

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="card shadow-lg" style={{ width: '22rem' }}>
        <div className="card-body text-center">
          <h1 className="card-title h3 mb-4">React Weather</h1>
          
          <SearchBar 
            city={city} 
            setCity={setCity} 
            handleSearch={fetchWeather} 
          />

          <ErrorMessage message={error} />

          <WeatherDisplay weather={weather} />
        </div>
      </div>
    </div>
  );
}

export default App;