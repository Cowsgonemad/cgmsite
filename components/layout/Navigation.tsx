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
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 shadow-lg">

            <nav className="border-b border-dark-grey flex justify-center p-4 bg-black rounded-tl-lg">
                <ul>

                    <NavigationLink label="Start" marginBottom={true} navigateTo={() => navigateTo(0)}>
                        <HomeIcon fillVar={currentScreen === 0 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="The Coin" marginBottom={true} navigateTo={() => navigateTo(1)}>
                        <CoinIcon fillVar={currentScreen === 1 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="The Game" marginBottom={true} navigateTo={() => navigateTo(2)}>
                        <ControlIcon fillVar={currentScreen === 2 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="NFT" marginBottom={true} navigateTo={() => navigateTo(3)}>
                        <TokenIcon fillVar={currentScreen === 3 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Roadmap" marginBottom={true} navigateTo={() => navigateTo(4)}>
                        <GoalIcon fillVar={currentScreen === 4 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Subscribe" marginBottom={false} navigateTo={() => navigateTo(5)}>
                        <SendIcon fillVar={currentScreen === 5 ? '--accent' : '--white'} />
                    </NavigationLink>

                </ul>
            </nav>

            <div className="border-b border-dark-grey flex flex-col items-center p-4 bg-white">

                <button className="block mt-1 mb-2" onClick={() => navigatePrevious()}>
                    <ArrowUpIcon />
                </button>

                <button className="block" onClick={() => navigateNext()}>
                    <ArrowDownIcon />
                </button>

            </div>

            <SocialBar />
        </div>
    );
};
