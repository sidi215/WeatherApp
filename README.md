<div align="center">

# 🌤️ Weather App

**A beautiful, modern weather application with multi-language support and stunning UI**

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://sidi215.github.io/WeatherApp/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.10-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

[Live Demo](https://sidi215.github.io/WeatherApp/) · [Report Bug](https://github.com/sidi215/WeatherApp/issues) · [Request Feature](https://github.com/sidi215/WeatherApp/issues)

</div>

---

## 📑 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Performance](#-performance)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## 🌟 About

A feature-rich weather application built with modern web technologies, offering real-time weather data with support for **English**, **French**, and **Arabic** (with full RTL layout support). The app features a stunning glassmorphism UI design with smooth animations and is fully responsive across all devices.

### Why This Project?

- 🎯 **Learning Project**: Demonstrates modern React patterns and best practices
- 🌍 **Internationalization**: Real-world example of multi-language support with RTL
- 🎨 **Modern UI/UX**: Showcases glassmorphism and micro-animations
- ⚡ **Performance**: Built with Vite for optimal load times

---

## ✨ Features

### Core Features
- 🌡️ **Real-Time Weather Data** - Current temperature, feels like, min/max
- 📊 **Detailed Metrics** - Humidity, wind speed, pressure, visibility
- ⏰ **Hourly Forecast** - Next 24 hours weather prediction
- 📅 **5-Day Forecast** - Daily weather outlook
- 🌍 **Multi-Language** - English, French, Arabic with auto RTL

### UI/UX Features
- 🎨 **Glassmorphism Design** - Modern frosted glass effects
- ✨ **Smooth Animations** - Micro-interactions and transitions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🌓 **Dark Theme** - Beautiful gradient backgrounds
- 🎭 **Weather Icons** - Animated weather condition icons

### Technical Features
- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🔄 **Auto-Refresh** - Real-time data updates
- 🌐 **PWA Ready** - Can be installed as a progressive web app
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔒 **Secure** - Environment variable support for API keys

---

## 🎬 Demo

### Live Application
**[👉 View Live Demo](https://sidi215.github.io/WeatherApp/)**

### Screenshots

<div align="center">

#### Desktop View
![Desktop View](https://via.placeholder.com/800x450/0B0F19/60A5FA?text=Desktop+View)

#### Mobile View
<img src="https://via.placeholder.com/375x667/0B0F19/60A5FA?text=Mobile+View" alt="Mobile View" width="300"/>

#### Language Switching
![Language Support](https://via.placeholder.com/800x450/0B0F19/FBBF24?text=Multi-Language+Support)

</div>

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19.1.1](https://reactjs.org/) - UI library
- **Build Tool**: [Vite 7.1.10](https://vitejs.dev/) - Next generation frontend tooling
- **Styling**: [TailwindCSS 3.4.17](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Material-UI Icons](https://mui.com/material-ui/material-icons/) - Icon library

### Internationalization
- **i18next**: Multi-language support
- **react-i18next**: React bindings for i18next
- **i18next-browser-languagedetector**: Automatic language detection

### Data & API
- **Axios**: HTTP client for API requests
- **OpenWeatherMap API**: Weather data provider
- **Moment.js**: Date and time formatting

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sidi215/WeatherApp.git
cd WeatherApp
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

> 💡 Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. **Start development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to `http://localhost:5173`

---

## 💻 Usage

### Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Changing Location

Edit `src/App.jsx`:

```javascript
const lat = 18.079021;  // Your latitude
const lon = -15.965662; // Your longitude
```

### Adding New Languages

1. Create translation file: `public/locales/{lang}/translation.json`
2. Add language option in `src/App.jsx`
3. Configure font in `src/index.css` (if needed)

---

## 🌐 Deployment

### GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

Your app will be live at: `https://sidi215.github.io/WeatherApp/`

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sidi215/WeatherApp)

```bash
npm install -g vercel
vercel
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sidi215/WeatherApp)

```bash
npm run build
# Drag and drop 'dist' folder to netlify.com/drop
```

### Other Platforms

- **Cloudflare Pages**: Connect GitHub repo
- **Render**: Static site deployment
- **Firebase Hosting**: `firebase deploy`

---

## 📁 Project Structure

```
WeatherApp/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── locales/                # Translation files
│   │   ├── en/
│   │   ├── fr/
│   │   └── ar/
│   └── Fonts/                  # Custom fonts
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── CurrentWeather.jsx  # Current weather display
│   │   ├── Forecast.jsx        # Hourly/daily forecast
│   │   ├── WeatherDetails.jsx  # Weather metrics cards
│   │   └── Footer.jsx          # App footer
│   ├── App.jsx                 # Main app component
│   ├── i18n.js                 # i18next configuration
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── .env                        # Environment variables
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md
```

---

## 🎨 Customization

### Color Palette

Edit `tailwind.config.js`:

```javascript
colors: {
  'accent-primary': '#60A5FA',   // Blue
  'accent-warm': '#FBBF24',      // Amber
  'accent-danger': '#F87171',    // Red
  'midnight': '#0B0F19',         // Dark background
  'glass-surface': 'rgba(255, 255, 255, 0.05)',
  'glass-border': 'rgba(255, 255, 255, 0.1)',
}
```

### Typography

Fonts are configured in `src/index.css`:

```css
html {
  font-family: 'Manrope', sans-serif;
}

html[dir="rtl"] {
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}
```

### Weather Location

Update coordinates in `src/App.jsx`:

```javascript
const lat = YOUR_LATITUDE;
const lon = YOUR_LONGITUDE;
```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Last 2 versions |
| Firefox | ✅ Last 2 versions |
| Safari | ✅ Last 2 versions |
| Edge | ✅ Last 2 versions |
| Opera | ✅ Last 2 versions |

---

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Bundle Size**: ~433 KB (144 KB gzipped)

---

## 🗺️ Roadmap

- [ ] Add geolocation support
- [ ] Implement weather alerts
- [ ] Add weather maps
- [ ] Support for more languages (Spanish, German, Chinese)
- [ ] Dark/Light theme toggle
- [ ] Save favorite locations
- [ ] Weather history charts
- [ ] PWA offline support
- [ ] Unit and integration tests
- [ ] Accessibility improvements

See the [open issues](https://github.com/sidi215/WeatherApp/issues) for a full list of proposed features.

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR

---

## ❓ FAQ

<details>
<summary><b>Why is the weather data different from other apps?</b></summary>

Different weather apps use different data sources and update frequencies. This app uses OpenWeatherMap API, which updates every 10 minutes. Other apps might use Weather.com, AccuWeather, or other services with different data sources.
</details>

<details>
<summary><b>Can I use a different weather API?</b></summary>

Yes! You can modify `src/App.jsx` to use any weather API. Just update the API endpoints and data parsing logic.
</details>

<details>
<summary><b>How do I add more languages?</b></summary>

1. Create a translation file in `public/locales/{lang}/translation.json`
2. Add the language option in `src/App.jsx`
3. Configure the font in `src/index.css` if needed
</details>

<details>
<summary><b>Is this production-ready?</b></summary>

This is primarily a learning/portfolio project. For production use, consider adding:
- Error boundaries
- Loading states
- Comprehensive testing
- Analytics
- Error tracking (Sentry)
</details>

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) - Weather data API
- [Material-UI](https://mui.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Typography
- [Shields.io](https://shields.io/) - README badges
- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

---

## 📧 Contact

**Sidi Med** - [@sidi215](https://github.com/sidi215)

Project Link: [https://github.com/sidi215/WeatherApp](https://github.com/sidi215/WeatherApp)

---

<div align="center">

**Made with ❤️ by Sidi Med**

⭐ Star this repo if you find it helpful!

</div>
