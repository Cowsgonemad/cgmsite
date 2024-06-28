import { ArrowDownIcon, ArrowUpIcon, CoinIcon, ControlIcon, GoalIcon, SendIcon, TokenIcon, XIcon, TelegramIcon, InstagramIcon, DiscordIcon } from '../icons';
import { NavigationLink } from './NavigationLink';

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
        <div className="fixed top-0 w-full z-50 bg-dark-green shadow-lg flex justify-between items-center px-4 h-14 border-b-4 border-black">

            <h1 className="text-white font-screebie opacity-60 cursor-pointer" onClick={() => navigateTo(0)}>COWS GONE MAD</h1>

            <nav className="">
                <ul className="flex justify-center gap-2 md:gap-8">

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

            <ul className="opacity-50 gap-2 items-center justify-center hidden lg:flex">
                <li className="flex">
                    <a className="inline-block p-1">
                        <XIcon size={20} />
                    </a>
                </li>
                <li className="flex">
                    <a className="inline-block p-1">
                        <TelegramIcon size={20} />
                    </a>
                </li>
                <li className="flex">
                    <a className="inline-block p-1">
                        <InstagramIcon size={20} />
                    </a>
                </li>
                <li className="flex">
                    <a className="inline-block p-1">
                        <DiscordIcon size={20} />
                    </a>
                </li>
            </ul>
        </div>
    );
};
