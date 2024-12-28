import axios from 'axios';

const API_KEY = 'bda34274295ed403a343daea3379d81a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (lat, lon) => {
  try {
    const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=en`;
    const response = await axios.get(url);
    
    if (!response.data || response.data.cod !== 200) {
      throw new Error(response.data.message || 'Invalid API response');
    }
    
    // Fix city names if needed
    let cityName = response.data.name;
    if (cityName === 'Le Polo' || cityName === 'Hay Hassani') {
      cityName = 'Casablanca';
    }
    
    return {
      city: cityName,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: response.data.weather[0].icon
    };
  } catch (error) {
    console.error('Weather API Error:', error);
    if (error.response?.status === 401) {
      throw new Error('Invalid API key');
    } else if (error.response?.status === 429) {
      throw new Error('API rate limit exceeded');
    }
    throw new Error('Failed to fetch weather data');
  }
};