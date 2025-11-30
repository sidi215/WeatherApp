import React from 'react';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <div className={`min-h-screen w-full flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
            <div className="w-full max-w-4xl glass-panel rounded-[2rem] overflow-hidden p-8 md:p-12 relative">
                {/* Spotlight Gradients */}
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-float"></div>
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-accent-warm/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-float" style={{ animationDelay: '3s' }}></div>

                <div className="relative z-10 flex flex-col gap-10 animate-fade-in-up">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
