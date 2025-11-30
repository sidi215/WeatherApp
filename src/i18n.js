import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "clear sky": "Clear Sky",
          "few clouds": "Few Clouds",
          "scattered clouds": "Scattered Clouds",
          "broken clouds": "Broken Clouds",
          "overcast clouds": "Overcast Clouds",
          "shower rain": "Shower Rain",
          "light rain": "Light Rain",
          "moderate rain": "Moderate Rain",
          "heavy intensity rain": "Heavy Rain",
          "rain": "Rain",
          "thunderstorm": "Thunderstorm",
          "snow": "Snow",
          "mist": "Mist",
          "humidity": "Humidity",
          "wind": "Wind",
          "pressure": "Pressure",
          "feels_like": "Feels Like",
          "language": "Language",
          "switch_lang": "العربية",
          "hourly_forecast": "Hourly Forecast",
          "daily_forecast": "7-Day Forecast",
          "min": "Min",
          "max": "Max",
          "visibility": "Visibility"
        }
      },
      fr: {
        translation: {
          "clear sky": "Ciel Dégagé",
          "few clouds": "Quelques Nuages",
          "scattered clouds": "Nuages Épars",
          "broken clouds": "Nuages Fragmentés",
          "overcast clouds": "Couvert",
          "shower rain": "Averses de Pluie",
          "light rain": "Pluie Légère",
          "moderate rain": "Pluie Modérée",
          "heavy intensity rain": "Pluie Forte",
          "rain": "Pluie",
          "thunderstorm": "Orage",
          "snow": "Neige",
          "mist": "Brume",
          "humidity": "Humidité",
          "wind": "Vent",
          "pressure": "Pression",
          "feels_like": "Ressenti",
          "language": "Langue",
          "switch_lang": "العربية",
          "hourly_forecast": "Prévisions horaires",
          "daily_forecast": "Prévisions sur 7 jours",
          "min": "Min",
          "max": "Max",
          "visibility": "Visibilité"
        }
      },
      ar: {
        translation: {
          "clear sky": "سماء صافية",
          "few clouds": "غيوم قليلة",
          "scattered clouds": "غيوم متفرقة",
          "broken clouds": "غيوم متقطعة",
          "overcast clouds": "غائم",
          "shower rain": "زخات مطر",
          "light rain": "مطر خفيف",
          "moderate rain": "مطر متوسط",
          "heavy intensity rain": "مطر غزير",
          "rain": "مطر",
          "thunderstorm": "عاصفة رعدية",
          "snow": "ثلج",
          "mist": "ضباب",
          "humidity": "الرطوبة",
          "wind": "الرياح",
          "pressure": "الضغط",
          "feels_like": "الشعور الحقيقي",
          "language": "اللغة",
          "switch_lang": "English",
          "hourly_forecast": "توقعات الساعة",
          "daily_forecast": "توقعات 7 أيام",
          "min": "الصغرى",
          "max": "العظمى",
          "visibility": "الرؤية"
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

export default i18n;