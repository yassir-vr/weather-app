import React from 'react';
import { Search } from 'lucide-react';
import { moroccanCities } from '../data/moroccanCities';

export const CitySearch = ({ onCitySelect }) => {
  const handleCityChange = (e) => {
    const selectedCity = moroccanCities.find(city => city.name === e.target.value);
    if (selectedCity) {
      onCitySelect(selectedCity);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <select
        onChange={handleCityChange}
        className="block w-full pl-10 pr-4 py-3 text-base bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        defaultValue=""
      >
        <option value="" disabled>Select a city</option>
        {moroccanCities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name} ({city.arabicName})
          </option>
        ))}
      </select>
    </div>
  );
};