# 🌤️ Weather App

A beautiful, modern weather application built with React, featuring multi-language support (English, French, Arabic) with full RTL layout support, real-time weather data, and stunning glassmorphism UI design.

![Weather App Demo](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.10-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-cyan)

## ✨ Features

- **🌍 Multi-Language Support**: English, French (Français), and Arabic (العربية) with automatic RTL layout
- **🎨 Modern UI Design**: Glassmorphism effects, smooth animations, and gradient backgrounds
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **🌡️ Real-Time Weather Data**: Current temperature, feels like, min/max temperatures
- **📊 Detailed Weather Info**: Humidity, wind speed, pressure, and visibility
- **⏰ Hourly Forecast**: Next 24 hours weather prediction
- **📅 Daily Forecast**: 5-day weather outlook
- **🎭 Beautiful Icons**: Weather condition icons with glow effects
- **⚡ Fast Performance**: Built with Vite for lightning-fast load times

## 🚀 Live Demo

**[View Live App](https://YOUR_USERNAME.github.io/WeatherApp/)**

> Replace `YOUR_USERNAME` with your GitHub username after deployment

## 📸 Screenshots

### English Interface
![English View](/home/sidimed/.gemini/antigravity/brain/c9ef77f0-5752-43bc-bc64-360f8bf8fa5b/english_view_1764523245776.png)

### Multi-Language Support
The app seamlessly switches between languages with proper typography and layout adjustments.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.10
- **Styling**: TailwindCSS 3.4.17
- **Internationalization**: i18next, react-i18next
- **HTTP Client**: Axios
- **Icons**: Material-UI Icons
- **Date Formatting**: Moment.js
- **Weather API**: OpenWeatherMap API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/WeatherApp.git
cd WeatherApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Key (Optional)

The app includes a default OpenWeatherMap API key. For production use, create a `.env` file:

```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api).

### 4. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173/` (or another port if 5173 is in use).

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository named `WeatherApp`
   - Don't initialize with README (we already have one)

2. **Connect Local Repository to GitHub**

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Weather App with multi-language support"

# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/WeatherApp.git

# Push to GitHub
git push -u origin main
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make your app live at `https://YOUR_USERNAME.github.io/WeatherApp/`

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**
5. Your app will be live in a few minutes!

## 🌐 Language Support

The app supports three languages with automatic font and layout adjustments:

| Language | Code | Font Family | Direction |
|----------|------|-------------|-----------|
| English | `en` | Manrope | LTR |
| French | `fr` | Manrope | LTR |
| Arabic | `ar` | IBM Plex Sans Arabic | RTL |

## 📁 Project Structure

```
WeatherApp/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Layout.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── Forecast.jsx
│   │   └── WeatherDetails.jsx
│   ├── locales/         # Translation files
│   │   ├── en/
│   │   ├── fr/
│   │   └── ar/
│   ├── App.jsx          # Main app component
│   ├── i18n.js          # i18next configuration
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── .env                 # Environment variables
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies & scripts
```

## 🎨 Customization

### Change Location

Edit `src/App.jsx` (lines 20-21):

```javascript
const lat = 18.079021;  // Your latitude
const lon = -15.965662; // Your longitude
```

### Modify Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'accent-primary': '#60A5FA',  // Blue
  'accent-warm': '#FBBF24',     // Amber
  'accent-danger': '#F87171',   // Red
  // Add your custom colors
}
```

### Add More Languages

1. Create translation file in `public/locales/[lang]/translation.json`
2. Add language option in `src/App.jsx`
3. Configure font in `src/index.css`

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors, try:

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run build
```

### API Issues

If weather data doesn't load:
- Check your API key is valid
- Verify internet connection
- Check browser console for errors
- Ensure API rate limits aren't exceeded (60 calls/minute for free tier)

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Material-UI](https://mui.com/material-ui/material-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ using React, Vite, and TailwindCSS**
