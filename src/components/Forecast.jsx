import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const Forecast = ({ title, items, type = 'hourly' }) => {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            <h3 className="text-sm font-bold text-accent-primary uppercase tracking-widest mb-6 px-2">
                {t(title)}
            </h3>

            <div className={`flex ${type === 'hourly' ? 'overflow-x-auto pb-6 gap-4 snap-x no-scrollbar' : 'flex-col gap-3'}`}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`
              flex items-center backdrop-blur-md transition-all duration-500 border border-glass-border
              ${type === 'hourly'
                                ? 'flex-col min-w-[110px] py-6 px-4 bg-white/5 rounded-[2rem] snap-center hover:bg-white/10 hover:-translate-y-2 hover:shadow-lg hover:border-accent-primary/30'
                                : 'justify-between p-5 bg-white/5 rounded-3xl hover:bg-white/10 hover:scale-[1.01]'
                            }
            `}
                    >
                        <span className={`text-white/70 ${type === 'hourly' ? 'text-sm font-medium' : 'text-base font-semibold w-24'}`}>
                            {type === 'hourly' ? moment(item.dt * 1000).format('HH:mm') : moment(item.dt * 1000).format('dddd')}
                        </span>

                        <div className={`flex items-center ${type === 'hourly' ? 'flex-col gap-3 my-4' : 'gap-4'}`}>
                            <img
                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                alt={item.weather[0].description}
                                className={`w-12 h-12 drop-shadow-md ${type === 'hourly' ? 'scale-110' : ''}`}
                            />
                            {type !== 'hourly' && (
                                <span className="text-sm text-white/60 hidden sm:block w-32 truncate font-medium">
                                    {t(item.weather[0].description)}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="font-bold text-xl text-white">
                                {Math.round(item.main ? item.main.temp : item.temp.day)}°
                            </span>
                            {type !== 'hourly' && (
                                <span className="text-white/40 text-sm font-medium">
                                    {Math.round(item.main ? item.main.temp_min : item.temp.min)}°
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
