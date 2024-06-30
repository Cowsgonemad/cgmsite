import { useState } from 'react';

export const TabButton = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => {

    const [gradient, setGradient] = useState<'active' | 'inactive'>('inactive');

    const isActive = gradient === 'active' || active;

    return(
        <button className="relative flex items-center justify-center w-32 lg:w-48 py-9 lg:py-20"
        onClick={onClick} onMouseEnter={() => setGradient('active')} onMouseLeave={() => setGradient('inactive')}>

            <img className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 transition duration-20 block scale-130" style={{opacity: isActive ? '1' : '0' }} src="/img/btn-active.svg" alt="active bg"/>
            <img className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 transition duration-20 block scale-130" style={{opacity: isActive ? '0' : '1' }} src="/img/btn-inactive.svg" alt="inactive bg"/>

            <span className={`z-10 font-extrabold uppercase text-base xl:text-lg ${isActive ? 'text-black' : 'text-white'}`}>{label}</span>
        </button>
    );
};
