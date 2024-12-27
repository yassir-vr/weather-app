import axios from 'axios';

const API_KEY = 'bda34274295ed403a343daea3379d81a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (lat, lon) => {
  try {
    console.log('Fetching weather for coordinates:', { lat, lon });
    
    const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    console.log('Request URL:', url);
    
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    
    if (!response.data || response.data.cod !== 200) {
      console.error('API Error Response:', response.data);
      throw new Error(response.data.message || 'Invalid API response');
    }
    
    const weatherData = {
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: response.data.weather[0].icon
    };
    
    console.log('Processed weather data:', weatherData);
    return weatherData;
    
  } catch (error) {
    console.error('Weather API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    if (error.response?.status === 401) {
      throw new Error('Invalid API key');
    } else if (error.response?.status === 429) {
      throw new Error('API rate limit exceeded');
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    
    throw new Error('Failed to fetch weather data');
  }
};