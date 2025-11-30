import React from 'react';
import { useTranslation } from 'react-i18next';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CompressIcon from '@mui/icons-material/Compress';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DetailCard = ({ icon: Icon, label, value, unit, accentColor = "text-white" }) => (
    <div className="bg-white/5 border border-glass-border p-6 rounded-[2rem] flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl group relative overflow-hidden">
        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${accentColor}/10 rounded-full blur-2xl group-hover:bg-${accentColor}/20 transition-colors`}></div>

        <div className="flex justify-between items-start z-10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors">
                <Icon className="text-white/90" sx={{ fontSize: 28 }} />
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{label}</span>
        </div>

        <div className="mt-6 z-10">
            <span className="text-4xl font-light tracking-tighter text-white">
                {value} <span className="text-lg font-normal text-white/40 ml-1">{unit}</span>
            </span>
        </div>
    </div>
);

const WeatherDetails = ({ data }) => {
    const { t } = useTranslation();

    if (!data) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <DetailCard
                icon={WaterDropIcon}
                label={t('humidity')}
                value={data.humidity}
                unit="%"
                accentColor="accent-primary"
            />
            <DetailCard
                icon={AirIcon}
                label={t('wind')}
                value={data.speed}
                unit="m/s"
                accentColor="accent-primary"
            />
            <DetailCard
                icon={CompressIcon}
                label={t('pressure')}
                value={data.pressure}
                unit="hPa"
                accentColor="accent-warm"
            />
            <DetailCard
                icon={VisibilityIcon}
                label={t('visibility')}
                value={data.visibility / 1000}
                unit="km"
                accentColor="accent-warm"
            />
        </div>
    );
};

export default WeatherDetails;
