import { Logo } from '../../ui';
import { Screen } from '../../layout';
import { useState } from 'react';

export const HeroSection = ({ 
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
        <Screen id="hero" containerClasses="bg-cod h-screen" containerStyle={{}}>

            <button className="hidden md:block absolute top-1/2 -translate-y-1/2 left-10 animate-soft-bounce" 
            onClick={() => navigateTo(1)}>
                <img src="/img/btn-black.svg" className="w-72" />
                <h3 className="absolute text-4xl font-outfit uppercase font-extrabold top-1/2 -translate-y-1/2 w-full text-center text-white -mt-4">The <span className="text-accent">Coin</span></h3>
            </button>

            <button className="hidden md:block absolute top-1/2 -translate-y-1/2 right-10 animate-soft-bounce" 
            onClick={() => navigateTo(2)}>
                <img src="/img/btn-white.svg" className="w-72" />
                <h3 className="absolute text-4xl font-outfit uppercase font-extrabold top-1/2 -translate-y-1/2 w-full text-center mt-4">The <span className="text-accent">Game</span></h3>
            </button>

            <button className="block md:hidden absolute left-1/2 -translate-x-1/2 bottom-10" 
            onClick={() => navigateTo(1)}>
                <img src="/img/btn-black.svg" className="w-72" />
                <h3 className="absolute text-2xl font-outfit uppercase font-extrabold top-1/2 -translate-y-1/2 w-full text-center text-accent -mt-4">
                    Discover
                </h3>
            </button>

            {/* <div className="flex relative h-screen">

                <div className="absolute h-screen w-screen top-0 left-0 flex justify-between z-10">

                    <div className="w-2/6 items-center pl-16 transition duration-20 animate-flicker hidden lg:flex" 
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

                    <div className="w-2/6 items-center justify-end pr-16 transition duration-20 animate-flicker hidden lg:flex"
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
            </div> */}

        </Screen>
    );
};
