import React from 'react';
import { Cloud } from 'lucide-react';
import { CitySearch } from './components/CitySearch';
import { WeatherCard } from './components/WeatherCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { useWeather } from './hooks/useWeather';

function App() {
  const { weather, loading, error, getWeatherForCity } = useWeather();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-600 rounded-full mb-6">
            <Cloud className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Morocco Weather
          </h1>
          <p className="text-lg text-gray-600">
            Real-time weather updates for major Moroccan cities
          </p>
        </div>

        {/* Search Section with spacing */}
        <div className="mb-24 relative z-50">
          <div className="glass-card rounded-2xl p-8">
            <CitySearch onCitySelect={getWeatherForCity} />
          </div>
        </div>

        {/* Weather Display Section */}
        <div className="relative z-40">
          {loading && (
            <div className="flex justify-center">
              <LoadingSpinner />
            </div>
          )}
          
          {error && (
            <div className="glass-card rounded-2xl p-6">
              <ErrorMessage message={error} />
            </div>
          )}
          
          {weather && !loading && !error && <WeatherCard weather={weather} />}
          
          {!weather && !loading && !error && (
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-gray-500 text-lg">
                Select a city to view detailed weather information
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;