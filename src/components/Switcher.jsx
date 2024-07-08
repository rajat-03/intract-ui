"use client"
import React, { useState } from 'react';

const Switcher = () => {
    const [activeTab, setActiveTab] = useState('Essentials');

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="sticky bottom-5% left-0 right-0 z-40 flex justify-center mb-12 mt-5 text-white">
            <div className="rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.05)] shadow-sm backdrop-blur-md max-w-max flex relative">
                <div
                    className={`inline-flex px-10 py-2 justify-center items-center rounded-full bg-transparent cursor-pointer text-center text-base font-normal leading-5 tracking-wide ${
                        activeTab === 'Essentials' ? 'text-white' : 'text-opacity-60'
                    }`}
                    onClick={() => handleTabSwitch('Essentials')}
                >
                    Essentials
                </div>
                <div className="relative">
                    <div
                        className={`inline-flex px-10 py-2 justify-center items-center rounded-full bg-transparent cursor-pointer text-center text-base font-normal leading-5 tracking-tight ${
                            activeTab === 'Alpha Hub' ? 'text-white' : 'text-opacity-60'
                        }`}
                        onClick={() => handleTabSwitch('Alpha Hub')}
                    >
                        Alpha Hub
                    </div>
                </div>
                <div
                    className="absolute top-0 left-0 w-1/2 h-full px-10 py-2 rounded-full bg-white bg-opacity-15 mix-blend-plus inset-shadow transition-transform duration-500 ease text-shadow"
                    style={{ transform: activeTab === 'Alpha Hub' ? 'translateX(100%)' : 'translateX(0)' }}
                ></div>
            </div>
        </div>
    );
};

export default Switcher;
