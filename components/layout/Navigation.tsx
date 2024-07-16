import { CoinIcon, ControlIcon, GoalIcon, SendIcon, TokenIcon, XIcon, TelegramIcon, InstagramIcon, DiscordIcon, HomeIcon, TeamIcon } from '../icons';
import { NavigationLink } from './NavigationLink';

export const Navigation = ({ 
    navigateTo, 
    currentScreen 
}: { 
    navigateTo: (screen: number) => void, 
    currentScreen: number 
}) => {

    return (
        <div className="fixed top-0 w-full z-50 bg-footer shadow-lg flex justify-between items-center h-20 border-b-4 border-black">

            <h1 className="text-white font-screebie cursor-pointer px-6 tracking-wider text-2xl font-thin text-drop-shadow leading-none hidden xl:block" onClick={() => navigateTo(0)}>
                COWS GONE MAD
            </h1>
            <h2 className="cursor-pointer px-6 block xl:hidden" onClick={() => navigateTo(0)}>
                <HomeIcon fillVar="--white" />
            </h2>

            <nav className="">
                <ul className="flex justify-center gap-2 md:gap-8 px-6">

                    <NavigationLink label="The Coin" isActive={currentScreen === 1} navigateTo={() => navigateTo(1)}>
                        <CoinIcon fillVar={currentScreen === 1 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="The Game" isActive={currentScreen === 2} navigateTo={() => navigateTo(2)}>
                        <ControlIcon fillVar={currentScreen === 2 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="NFT" isActive={currentScreen === 3} navigateTo={() => navigateTo(3)}>
                        <TokenIcon fillVar={currentScreen === 3 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Roadmap" isActive={currentScreen === 4} navigateTo={() => navigateTo(4)}>
                        <GoalIcon fillVar={currentScreen === 4 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Team" isActive={currentScreen === 5} navigateTo={() => navigateTo(5)}>
                        <TeamIcon fillVar={currentScreen === 5 ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Subscribe" isActive={currentScreen === 6} navigateTo={() => navigateTo(6)}>
                        <SendIcon fillVar={currentScreen === 6 ? '--accent' : '--white'} />
                    </NavigationLink>

                </ul>
            </nav>

            <ul className="gap-2 items-center justify-center hidden xl:flex px-6">
                <li className="flex">
                    <a className="inline-block p-1 bg-dark-blue rounded-md" href="https://x.com/cowsgonemad" target="_blank">
                        <XIcon size={20} />
                    </a>
                </li>
                <li className="flex">
                    <a className="inline-block p-1 bg-dark-blue rounded-md" href="https://t.me/MooMoo_Portal" target="_blank">
                        <TelegramIcon size={20} />
                    </a>
                </li>
                <li>
                    <a href="/docs/v1.0.1 Cows Gone Mad Whitepaper 2024.pdf" download={true} 
                    className="inline-block p-1 bg-dark-blue rounded-md text-sm font-bold uppercase text-accent">whitepaper</a>
                </li>
                {/* <li className="flex">
                    <a className="inline-block p-1 bg-dark-blue rounded-md">
                        <InstagramIcon size={20} />
                    </a>
                </li>
                <li className="flex">
                    <a className="inline-block p-1 bg-dark-blue rounded-md">
                        <DiscordIcon size={20} />
                    </a>
                </li> */}
            </ul>
        </div>
    );
};
