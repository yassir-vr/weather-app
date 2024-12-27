import React from 'react';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudDrizzle 
} from 'lucide-react';

export const WeatherIcon = ({ icon, className = "h-12 w-12" }) => {
  const iconMap = {
    '01d': <Sun className={className} />,
    '01n': <Sun className={className} />,
    '02d': <Cloud className={className} />,
    '02n': <Cloud className={className} />,
    '03d': <Cloud className={className} />,
    '03n': <Cloud className={className} />,
    '04d': <Cloud className={className} />,
    '04n': <Cloud className={className} />,
    '09d': <CloudDrizzle className={className} />,
    '09n': <CloudDrizzle className={className} />,
    '10d': <CloudRain className={className} />,
    '10n': <CloudRain className={className} />,
    '11d': <CloudLightning className={className} />,
    '11n': <CloudLightning className={className} />,
    '13d': <CloudSnow className={className} />,
    '13n': <CloudSnow className={className} />
  };

  return iconMap[icon] || <Cloud className={className} />;
};