import { ArrowDownIcon, ArrowUpIcon, CoinIcon, ControlIcon, HomeIcon, GoalIcon, SendIcon, TokenIcon } from '../icons';
import { NavigationLink } from './NavigationLink';
import { SocialBar } from './SocialBar';

export const Navigation = ({ 
    navigateTo, 
    navigatePrevious,
    navigateNext,
    currentScreen 
}: { 
    navigateTo: (screen: number) => void, 
    navigatePrevious: () => void,
    navigateNext: () => void,
    currentScreen: number 
}) => {

    return (
        <div className="fixed left-1/2 top-2 -translate-x-1/2 z-50 shadow-lg">

            <nav className="py-2 px-4 bg-dark-green rounded-lg">
                <ul className="flex gap-4">

                    <NavigationLink label="Start" navigateTo={() => navigateTo(0)}>
                        <HomeIcon fillVar={currentScreen === 0 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="The Coin" navigateTo={() => navigateTo(1)}>
                        <CoinIcon fillVar={currentScreen === 1 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="The Game" navigateTo={() => navigateTo(2)}>
                        <ControlIcon fillVar={currentScreen === 2 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="NFT" navigateTo={() => navigateTo(3)}>
                        <TokenIcon fillVar={currentScreen === 3 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Roadmap" navigateTo={() => navigateTo(4)}>
                        <GoalIcon fillVar={currentScreen === 4 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Subscribe" navigateTo={() => navigateTo(5)}>
                        <SendIcon fillVar={currentScreen === 5 ? '--accent' : '--white'} />
                    </NavigationLink>

                </ul>
            </nav>

            {/* <div className="hidden md:flex border-b border-dark-grey flex-col items-center p-4 bg-white rounded-bl-xl">

                <button className="block mt-1 mb-2" onClick={() => navigatePrevious()}>
                    <ArrowUpIcon />
                </button>

                <button className="block" onClick={() => navigateNext()}>
                    <ArrowDownIcon />
                </button>

            </div> */}

            {/* <SocialBar /> */}
        </div>
    );
};
