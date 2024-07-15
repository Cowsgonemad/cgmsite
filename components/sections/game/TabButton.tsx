import { useState } from 'react';

export const TabButton = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => {

    const [gradient, setGradient] = useState<'active' | 'inactive'>('inactive');

    const isActive = gradient === 'active' || active;

    return(
        <button className="flex items-center justify-center w-20 sm:w-40 2xl:w-48 pt-8 pb-4  overflow-hidden"
        onClick={onClick} onMouseEnter={() => setGradient('active')} onMouseLeave={() => setGradient('inactive')}>
            <img className="absolute transition duration-20 block w-32 sm:w-52 2xl:w-64 h-auto"
            style={{opacity: isActive ? '1' : '0' }} src="/img/btn-active.svg" alt="active bg"/>
            <img className="absolute transition duration-20 block w-32 sm:w-52 2xl:w-64 h-auto"
            style={{opacity: isActive ? '0' : '1' }} src="/img/btn-inactive.svg" alt="inactive bg"/>

            <span className={`z-10 font-extrabold uppercase text-sm sm:text-base xl:text-lg ${isActive ? 'text-black' : 'text-white'}`}>{label}</span>
        </button>
    );
};
