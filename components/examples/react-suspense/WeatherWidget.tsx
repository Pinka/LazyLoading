"use client";

import { useEffect, useState } from "react";

/**
 * Weather widget component that demonstrates lazy loading with React Suspense.
 * Only loads the weather data when the component is rendered.
 */
export default function WeatherWidget() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<{
    cities: Array<{ name: string; temp: string; condition: string }>;
    updated: string;
  } | null>(null);

  // Fetch weather data when component mounts
  useEffect(() => {
    const fetchWeatherData = async () => {
      // Simulate API fetch with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock weather data
      setWeatherData({
        cities: [
          { name: "New York", temp: "72°F", condition: "Sunny" },
          { name: "London", temp: "65°F", condition: "Cloudy" },
          { name: "Tokyo", temp: "80°F", condition: "Partly Cloudy" },
          { name: "Sydney", temp: "85°F", condition: "Clear" },
        ],
        updated: new Date().toLocaleTimeString(),
      });

      setLoading(false);
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-pulse text-blue-500">
          Loading weather data...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-blue-50 p-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Weather Forecast</h3>
        <div className="text-xs text-gray-500">
          Updated: {weatherData?.updated}
        </div>
      </div>

      <div className="space-y-3">
        {weatherData?.cities.map((city) => (
          <div
            key={city.name}
            className="flex justify-between items-center p-2 bg-white rounded shadow-sm"
          >
            <div className="font-medium">{city.name}</div>
            <div className="flex items-center">
              <div className="mr-2">{city.temp}</div>
              <div className="text-sm text-gray-600">{city.condition}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
