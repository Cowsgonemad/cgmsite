import { Logo } from '../ui';
import { Screen } from '../layout';

export const HomeSection = ({ 
    navigateToCoinScreen 
}: { 
    navigateToCoinScreen: (screen: number) => void 
}) => {

    return(
        <Screen containerClasses="dark-gradient" containerStyle={{}}>

            <div className="absolute top-0 left-0 size-full bg-cow opacity-1 -z-10"></div>
            <div className="absolute top-0 left-0 size-full bg-halftone mix-dodge opacity-3 -z-10"></div>

            <div className="size-full text-center flex items-center flex-col">

                <div className="w-1/3 mt-auto">
                    <div className="animate-flicker">
                        <div className="animate-soft-bounce">
                            <Logo />
                        </div>
                    </div>
                </div>

                <div className="w-1/3 mx-auto bg-black bg-opacity-80 mt-8 py-2 px-4 rounded-lg">
                    <p className="text-white text-lg font-thin text-justify">
                    After the meteoric event that endowed the cows of Pasture Prime with extraordinary powers, the balance of nature has been disrupted. The transformative cryptonite not only altered the cows but also the predatory wolves, leading to an uneasy truce between the cows and humans.
                    </p>
                </div>

                <div className="animate-soft-bounce mt-8 mb-auto">
                    <button className="inline-block uppercase font-extrabold text-accent px-5 py-2 -skew-x-12 border-2 border-accent shadow-button hover:text-pink hover:border-pink transition duration-20 button-filter bg-black bg-opacity-80" 
                    onClick={() => navigateToCoinScreen(1)}>

                        <span className="inline-block skew-x-12 text-2xl">Enter</span>
                    </button>
                </div>

            </div>
        </Screen>
    );
};
