import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const CurrentWeather = ({ data, city }) => {
    const { t } = useTranslation();

    if (!data) return null;

    return (
        <div className="flex flex-col items-center justify-center text-white w-full py-10 relative">
            {/* Hero Section */}
            <div className="text-center space-y-2 z-10">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{city}</h1>
                <p className="text-lg text-accent-primary font-medium tracking-widest uppercase">{moment().format("dddd, MMM Do")}</p>
            </div>

            <div className="relative mt-12 mb-8 group">
                <div className="absolute inset-0 bg-accent-primary/30 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                <img
                    src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
                    alt={data.description}
                    className="w-56 h-56 relative z-10 drop-shadow-glow transform group-hover:scale-110 transition-transform duration-700 ease-out animate-float"
                />
            </div>

            <div className="flex flex-col items-center z-10">
                <span className="text-[8rem] md:text-[10rem] font-light leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    {Math.round(data.temp)}°
                </span>
                <span className="text-2xl font-medium capitalize mt-2 text-white/90">{t(data.description)}</span>
            </div>

            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-3 gap-12 md:gap-24 w-full max-w-3xl mx-auto border-t border-glass-border pt-8">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">{t('min')}</span>
                    <span className="text-2xl font-light">{Math.round(data.temp_min)}°</span>
                </div>
                <div className="flex flex-col items-center gap-2 border-x border-glass-border px-12">
                    <span className="text-xs font-bold text-accent-warm uppercase tracking-widest">{t('feels_like')}</span>
                    <span className="text-2xl font-light">{Math.round(data.feels_like)}°</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-accent-danger uppercase tracking-widest">{t('max')}</span>
                    <span className="text-2xl font-light">{Math.round(data.temp_max)}°</span>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
