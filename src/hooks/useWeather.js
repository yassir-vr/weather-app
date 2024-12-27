import { useState } from 'react';
import { fetchWeather } from '../services/weatherApi';

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherForCity = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeather(city.latitude, city.longitude);
      setWeather(data);
    } catch (err) {
      setError('Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeatherForCity };
};