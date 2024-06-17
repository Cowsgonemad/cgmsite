'use client';

import { Logo } from '../ui';
import { Screen } from '../layout';
import { useState } from 'react';

export const HomeSection = ({ 
    navigateTo,
}: { 
    navigateTo: (screen: number) => void,
}) => {

    const [overlay, setOverlay] = useState('full');
    const [translate, setTranslate] = useState('none');

    const getPos = () => {
        let classes = 'size-full absolute right-0 top-0 bg-black bg-opacity-80 transition duration-20';
        if (overlay === 'left') classes += ' translate-x-1/2';
        else if (overlay === 'right') classes += ' -translate-x-1/2';
        return classes;
    };

    const pos = getPos();

    const goRight = () => {
        setTranslate('right');
        setTimeout(() => {
            navigateTo(2);
            setTimeout(() => {
                reset();
            }, 500);
        }, 100);
    };

    const goLeft = () => {
        setTranslate('left');
        setTimeout(() => {
            navigateTo(1);
            setTimeout(() => {
                reset();
            }, 500);
        }, 100);
    };

    const reset = () => {
        setOverlay('full');
        setTranslate('none');
    };

    return(
        <Screen containerClasses="" containerStyle={{}}>

            <div className={`absolute top-0 h-full w-[300vw] transition duration-20  
                ${translate === 'none' && 'translate-x-[-33.33%]'}
                ${translate === 'left' && 'translate-x-0'}
                ${translate === 'right' && 'translate-x-[-66.66%]'}`}>

                <div className="size-full absolute top-0 bg-hero"></div>
                <div className="size-full absolute top-0 bg-hero-draft"></div>
            </div>

            <div className="absolute top-0 left-0 size-full flex">

                <div className={pos}></div>

                <div className={`size-full flex items-center justify-center transition duration-200 ${overlay === 'left' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-2/4">
                        <Logo />
                    </div>
                </div>
                <div className={`size-full flex items-center justify-center transition duration-200 ${overlay === 'right' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-2/4">
                        <Logo />
                    </div>
                </div>

            </div>

            <div className="size-full flex items-center justify-center flex-col">

                <div className={`w-2/3 md:w-1/3 transition duration-20 ${overlay === 'full' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="animate-flicker">
                        <div className="animate-soft-bounce">
                            <Logo />
                        </div>
                    </div>
                </div>

                <div className="w-2/3 md:w-1/3 flex justify-between mt-8">

                    <button className={`transition duration-20 cursor-pointer hover:opacity-100 hover:translate-y-2  ${overlay === 'right' ? 'opacity-0' : 'opacity-100'}`} 
                    onMouseEnter={() => setOverlay('left')} onMouseLeave={() => setOverlay('full')} onClick={goLeft}>
                        <svg className="arrow-drop" width="233" height="114" viewBox="0 0 233 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="b" patternUnits="userSpaceOnUse" width="400" height="400">
                                    <image href="/img/halftone.png" x="0" y="0" width="400" height="400" />
                                </pattern>
                            </defs>
                            <path fill="url(#b)" stroke="rgb(var(--black))" strokeWidth="3" d="M233 107.5L200.5 37L101 41V0L0 53.5L101 113.5V73.5L233 107.5Z"/>
                        </svg>
                    </button>

                    <button className={`transition duration-20 cursor-pointer hover:opacity-100 hover:translate-y-2  ${overlay === 'left' ? 'opacity-0' : 'opacity-100'}`} 
                    onMouseEnter={() => setOverlay('right')} onMouseLeave={() => setOverlay('full')} onClick={goRight}>
                        <svg className="arrow-drop" width="233" height="114" viewBox="0 0 233 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="b" patternUnits="userSpaceOnUse" width="400" height="400">
                                    <image href="/img/halftone.png" x="0" y="0" width="400" height="400" />
                                </pattern>
                            </defs>
                            <path fill="url(#b)" stroke="rgb(var(--black))" strokeWidth="3" d="M0 107.5L32.5 37L132 41V0L233 53.5L132 113.5V73.5L0 107.5Z"/>
                        </svg>
                    </button>

                </div>
            </div>
        </Screen>
    );
};
