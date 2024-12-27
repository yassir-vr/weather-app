import React from 'react';
import { Droplets, Wind } from 'lucide-react';
import { WeatherIcon } from './WeatherIcon';

export const WeatherCard = ({ weather }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="weather-gradient p-6 text-white">
        <h2 className="text-3xl font-bold mb-1">{weather.city}</h2>
        <p className="text-blue-100 capitalize">{weather.description}</p>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <WeatherIcon icon={weather.icon} className="h-16 w-16 text-blue-600 mr-4" />
            <div className="text-6xl font-bold text-gray-900">
              {Math.round(weather.temperature)}°
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Droplets className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="text-xl font-semibold text-gray-900">{weather.humidity}%</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Wind className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Wind Speed</p>
                <p className="text-xl font-semibold text-gray-900">{weather.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};