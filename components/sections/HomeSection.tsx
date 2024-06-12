import { Logo } from '../ui';
import { Screen } from '../layout';

export const HomeSection = ({ 
    navigateToCoinScreen 
}: { 
    navigateToCoinScreen: (screen: number) => void 
}) => {

    return(
        <Screen containerClasses="" containerStyle={{}}>

            <div className="absolute top-0 left-0 size-full">

                <div className="w-1/2 h-full absolute left-0 top-0 bg-cow border-r-10 border-black"></div>
                <div className="w-1/2 h-full absolute right-0 top-0 bg-cow border-l-10 border-black"></div>

                <svg className="absolute -top-10 w-full svgdrop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 900" preserveAspectRatio="none">
                    <defs>
                        <pattern id="b" patternUnits="userSpaceOnUse" width="2002" height="1144">
                            <image href="/img/land.jpg" x="0" y="0" width="2002" height="1144" />
                        </pattern>
                    </defs>
                    <path fill="url(#b)" d="M1920 0L0 0 960 860 1920 0Z" strokeWidth="20" stroke="rgb(var(--black))"></path>
                </svg>

                <div className="absolute top-0 left-0 size-full bg-black bg-opacity-40"></div>
            </div>

            <div className="size-full text-center flex items-center flex-col">

                <div className="w-1/3 mt-auto">
                    <div className="animate-flicker">
                        <div className="animate-soft-bounce">
                            <Logo />
                        </div>
                    </div>
                </div>

                {/* <div className="w-1/3 mx-auto bg-black bg-opacity-80 mt-8 py-2 px-4 rounded-lg">
                    <p className="text-white text-lg font-thin text-justify">
                    After the meteoric event that endowed the cows of Pasture Prime with extraordinary powers, the balance of nature has been disrupted. The transformative cryptonite not only altered the cows but also the predatory wolves, leading to an uneasy truce between the cows and humans.
                    </p>
                </div> */}

                <div className="animate-soft-bounce mt-8 mb-auto">
                    <button className="block uppercase font-extrabold text-black px-5 py-2 focus:text-white transition duration-20 text-2xl w-80 border-4 border-black focus:border-white bg-halftone hover:translate-y-2" 
                    onClick={() => navigateToCoinScreen(1)}>
                        Discover
                    </button>
                </div>

            </div>
        </Screen>
    );
};
