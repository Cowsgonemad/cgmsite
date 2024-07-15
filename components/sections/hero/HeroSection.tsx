import { Screen } from '../../layout';

export const HeroSection = ({ 
    navigateTo,
}: { 
    navigateTo: (screen: number) => void,
}) => {

    return(
        <Screen id="hero" containerClasses="bg-hero h-screen">

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

            {/* <button className="block md:hidden absolute left-1/2 -translate-x-1/2 bottom-10 opacity-flicker" 
            onClick={() => navigateTo(1)}>
                <img src="/img/btn-black.svg" className="w-72" />
                <h3 className="absolute text-2xl font-outfit uppercase font-extrabold top-1/2 -translate-y-1/2 w-full text-center text-accent -mt-4">
                    Discover
                </h3>
            </button> */}

        </Screen>
    );
};
