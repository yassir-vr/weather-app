import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { moroccanCities } from '../data/moroccanCities';

const POPULAR_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fes",
  "Tangier",
  "Agadir"
];

export const CitySearch = ({ onCitySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCityClick = (cityName) => {
    const city = moroccanCities.find(c => c.name === cityName);
    if (city) {
      onCitySelect(city);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const filteredCities = searchTerm
    ? moroccanCities.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.arabicName.includes(searchTerm)
      )
    : [];

  return (
    <div className="relative w-full max-w-md mx-auto" ref={wrapperRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(true)}
          placeholder="Search for a city..."
          className="w-full pl-10 pr-4 py-3 text-base bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-xl shadow-lg overflow-hidden">
          {!searchTerm && (
            <div className="p-3 border-b">
              <div className="text-sm font-semibold text-gray-500 mb-2">Popular Cities</div>
              <div className="grid grid-cols-2 gap-2">
                {POPULAR_CITIES.map(cityName => {
                  const city = moroccanCities.find(c => c.name === cityName);
                  return (
                    <button
                      key={cityName}
                      onClick={() => handleCityClick(cityName)}
                      className="text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{cityName}</div>
                      <div className="text-sm text-gray-500">{city.arabicName}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {searchTerm && filteredCities.length > 0 && (
            <div className="max-h-64 overflow-y-auto">
              {filteredCities.map(city => (
                <button
                  key={city.name}
                  onClick={() => handleCityClick(city.name)}
                  className="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors"
                >
                  <div className="font-medium text-gray-900">{city.name}</div>
                  <div className="text-sm text-gray-500">{city.arabicName}</div>
                </button>
              ))}
            </div>
          )}

          {searchTerm && filteredCities.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              No cities found matching "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};