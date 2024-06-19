'use client';

import { Logo } from '../ui';
import { Screen } from '../layout';
import { useState } from 'react';

export const HomeSection = ({ 
    navigateTo,
}: { 
    navigateTo: (screen: number) => void,
}) => {

    const [translate, setTranslate] = useState('none');

    const getTransitionProperty = (): string => {
        if (translate === 'left') {
            return 'z-index 0s, transform .5s';
        }
        if(translate === 'right') {
            return 'transform 0s';
        }
        return 'transform .5s, z-index .6s';
    };

    return(
        <Screen containerClasses="flex" containerStyle={{}}>

            <div className="h-full w-[300%]">

                <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" fill="#fff"
                className="absolute top-0"
                style={{ 
                    left: '50%', 
                    // opacity: translate === 'left' ? '1' : '.8',
                    transform: translate === 'left' ? 'translateX(-30%)' : 'translateX(-50%)',
                    zIndex: translate === 'left' ? '1' : '0',
                    transition: getTransitionProperty()
                }}>

                    <path d="M1665.76 0H0v1080h2289.3L1665.76 0Z" fill="url(#b-draft)"/>
 
                    <defs>
                        <pattern id="b-draft" patternUnits="userSpaceOnUse" width="4032" height="2304">
                            <image href="/img/hero-draft.jpg" x="0%" y="0" width="4032" height="2304" />
                        </pattern>
                    </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" fill="none"
                className="absolute top-0 transition" 
                style={{ 
                    left: '50%', 
                    // opacity: translate === 'right' ? '1' : '.8',
                    transform: translate === 'right' ? 'translateX(-70%)' : 'translateX(-50%)',
                    transitionDuration: '.5s'
                    // zIndex: translate === 'right' ? '9' : '0'
                }}>

                    <path d="M2295.07 1080H3880V0H1671.53l623.54 1080Z" fill="url(#b-color)"/>

                    <defs>
                        <pattern id="b-color" patternUnits="userSpaceOnUse" width="4032" height="2304">
                            <image href="/img/hero.jpg" x="0" y="0" width="4032" height="2304" />
                        </pattern>
                    </defs>
                </svg>
            </div>

            <div className="absolute size-full z-10">
                <svg fill="none" viewBox="0 0 1920 1080" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M1328-11.157 1389.84-73l48 48L1355 57.843H978V58H565l-82.843-82.843 48-48L592-11h350v-.157h386Zm592 11h-160v4h-172v-4h-137.31l-11-11-11 11h-.69V.53l-67.31 67.314H1104v4H937V72H816v-4H559.314L492 .686V0h-.686l-11-11-11 11H332v4H160V0H0v47.25L-2.25 45-20 62.75-1.75 81H-13v77h3.25L-45 193.25l21.79 21.789L4 187.828v704.344l-27.21-27.211L-45 886.75-9.75 922H-13v77h11.25L-20 1017.25-2.25 1035l2.25-2.25V1080h160v-4h172v4h137.314l11 11 11-11H492v-.69l67.314-67.31H816v-4h288v4h256.69l67.31 67.31v.69h.69l11 11 11-11H1588v-4h172v4h160v-47.25l2.25 2.25 17.75-17.75-18.25-18.25H1933v-77h-3.25l35.25-35.25-21.79-21.789-27.21 27.211V540h-8v360.172L1886.17 922h-.17v.172l-.04.039.04.039V999h.25l18 18h-.25v47h-144v4h-172v-4h-152.69l-68.15-68.157-.16.157h-263v4H816v-4H553l-.157-.157L484.686 1064H332v4H160v-4H16v-47h-.25l18-18H34v-76.75l.04-.039-.04-.039V922h-.172L12 900.172V179.828L33.828 158H34v-.172l.04-.039-.04-.039V81h-.25l-18-18H16V16h144v-4h172v4h152.686l68.157 68.157L553 84h263v-4h167v-.157h121v4h263l.16.157 68.15-68.157H1588v-4h172v4h144v47h.25l-18 18h-.25v76.75l-.04.039.04.04v.171h.17l21.83 21.829v360.171h8V187.672l27.21 27.21 21.79-21.789-35.25-35.25h3.25v-77h-11.25l18.25-18.25-17.75-17.75-2.25 2.25V-.157ZM530.157 1152.84 592 1091h736l61.84 61.84 48-48L1355 1022H565l-82.843 82.84 48 48Z" fill="rgb(var(--black))"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h1920v1080H0z"/></clipPath></defs></svg>
            </div>

            <div className="absolute size-full top-0 left-0 flex justify-between z-10">

                <div className="w-2/6 flex items-center pl-16 transition duration-20 animate-flicker" 
                style={{opacity: translate === 'left' || translate === 'none' ? '1' : '0'}}>

                    <button className="relative text-white hover:text-accent hover:translate-x-20 transition duration-20"
                    onMouseEnter={() => setTranslate('left')} onMouseLeave={() => setTranslate('none')} onClick={() => navigateTo(1)}>
                        <svg className="absolute -z-10" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h300v54.855L234.855 120H0V0ZM241.926 120h20.929L300 82.855V61.926L241.926 120ZM269.926 120 300 89.926V120h-30.074Z" fill="rgb(var(--black))"/>
                        </svg>

                        <h3 className="px-16 py-10 text-4xl font-outfit uppercase font-extrabold">The <span className="text-pink">Coin</span></h3>
                    </button>
                </div>

                <div className="w-2/6 flex justify-center align-center">
                    <div className="w-full my-auto">
                        <div className="animate-flicker flex items-center">
                           
                            <div className="animate-soft-bounce absolute" style={{
                                    opacity: translate === 'left' ? '1' : '0', transitionDuration: '1s'
                                }}>
                                    <Logo />
                                </div>

                            <div className="animate-soft-bounce absolute" style={{
                                    opacity: translate === 'right' ? '1' : '0', transitionDuration: '1s'
                                }}>
                                    <Logo />
                                </div>
                            

                        </div>
                    </div>
                </div>

                <div className="w-2/6 flex items-center justify-end pr-16 transition duration-20 animate-flicker"
                style={{opacity: translate === 'right' || translate === 'none' ? '1' : '0'}}>

                    <button className="relative text-white hover:text-accent hover:-translate-x-20 transition duration-20"
                    onMouseEnter={() => setTranslate('right')} onMouseLeave={() => setTranslate('none')} onClick={() => navigateTo(2)}>
                        <svg className="absolute -z-10" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M300 0H0v54.855L65.145 120H300V0ZM58.074 120h-20.93L0 82.855V61.926L58.074 120ZM30.074 120 0 89.926V120h30.074Z" fill="rgb(var(--black))"/>
                        </svg>

                        <h3 className="px-16 py-10 text-4xl font-outfit uppercase font-extrabold">The <span className="text-pink">Game</span></h3>
                    </button>
                </div>

            </div>

        </Screen>
    );
};
