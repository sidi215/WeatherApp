import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import WeatherDetails from './components/WeatherDetails';
import LanguageIcon from '@mui/icons-material/Language';

function App() {
  const { t, i18n } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY || 'b360baa3f7780eba0ebec0978d672da3';
        const lat = 18.079021;
        const lon = -15.965662;

        const [currentRes, forecastRes] = await Promise.all([
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`),
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        ]);

        setWeatherData({
          temp: currentRes.data.main.temp,
          temp_max: currentRes.data.main.temp_max,
          temp_min: currentRes.data.main.temp_min,
          feels_like: currentRes.data.main.feels_like,
          description: currentRes.data.weather[0].description,
          icon: currentRes.data.weather[0].icon,
          humidity: currentRes.data.main.humidity,
          pressure: currentRes.data.main.pressure,
          speed: currentRes.data.wind.speed,
          visibility: currentRes.data.visibility,
        });

        // Process 5-day forecast to simulate daily (taking noon values)
        // Note: Free API only gives 5 day / 3 hour forecast. 
        // For a true 7-day daily forecast, a paid subscription is usually needed (One Call API 3.0).
        // We will approximate daily by taking one reading per day.
        const dailyData = forecastRes.data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));

        setForecastData({
          hourly: forecastRes.data.list.slice(0, 8), // Next 24 hours (approx)
          daily: dailyData
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-primary text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="absolute top-6 right-6 z-50 group">
        <div className="relative">
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-glass-border transition-all text-sm font-medium">
            <LanguageIcon fontSize="small" className="text-accent-primary" />
            <span className="uppercase">{i18n.language}</span>
          </button>

          <div className="absolute right-0 top-full mt-2 w-32 bg-midnight/90 backdrop-blur-xl border border-glass-border rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 shadow-2xl">
            {[
              { code: 'en', label: 'English' },
              { code: 'fr', label: 'Français' },
              { code: 'ar', label: 'العربية' }
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-white/10 transition-colors flex items-center justify-between ${i18n.language === lang.code ? 'text-accent-primary bg-white/5' : 'text-white/70'}`}
              >
                {lang.label}
                {i18n.language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <CurrentWeather data={weatherData} city="Nouakchott" />

      <div className="w-full h-[1px] bg-white/10 my-2"></div>

      <WeatherDetails data={weatherData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {forecastData && (
          <>
            <Forecast
              title="hourly_forecast"
              items={forecastData.hourly}
              type="hourly"
            />
            <Forecast
              title="daily_forecast"
              items={forecastData.daily}
              type="daily"
            />
          </>
        )}
      </div>
    </Layout>
  );
}

export default App;
