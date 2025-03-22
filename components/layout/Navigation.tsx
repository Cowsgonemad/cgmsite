import { CoinIcon, ControlIcon, GoalIcon, SendIcon, TokenIcon, XIcon, TelegramIcon, InstagramIcon, DiscordIcon, HomeIcon, TeamIcon, HealthIcon } from '../icons';
import { NavigationLink } from './NavigationLink';

export const Navigation = ({ 
    navigateTo, 
    currentScreen 
}: { 
    navigateTo: (screen: string) => void, 
    currentScreen: string 
}) => {

    return (
        <div className="fixed top-0 w-full z-40 bg-footer shadow-lg flex justify-center 2xl:justify-between items-center h-20 border-b-4 border-black">

            <h1 className="text-white font-screebie cursor-pointer px-6 tracking-wider text-2xl font-thin text-drop-shadow leading-none hidden 2xl:block" onClick={() => navigateTo('hero')}>
                COWS GONE MAD
            </h1>

            <nav className="">
                <ul className="flex justify-center gap-1 md:gap-8 px-4">

                    <li className="block 2xl:hidden">
                        <button title="Home" className="py-1 px-1 sm:px-2 flex items-center" onClick={() => navigateTo('hero')}>
                            <HomeIcon fillVar="--white" />
                        </button>
                    </li>

                    <NavigationLink label="The Token" isActive={currentScreen === 'the-coin'} navigateTo={() => navigateTo('the-coin')}>
                        <CoinIcon fillVar={currentScreen === 'the-coin' ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="The Game" isActive={currentScreen === 'the-game'} navigateTo={() => navigateTo('the-game')}>
                        <ControlIcon fillVar={currentScreen === 'the-game' ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="NFT" isActive={currentScreen === 'the-nft'} navigateTo={() => navigateTo('the-nft')}>
                        <TokenIcon fillVar={currentScreen === 'the-nft' ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Roadmap" isActive={currentScreen === 'roadmap'} navigateTo={() => navigateTo('roadmap')}>
                        <GoalIcon fillVar={currentScreen === 'roadmap' ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Team" isActive={currentScreen === 'team'} navigateTo={() => navigateTo('team')}>
                        <TeamIcon fillVar={currentScreen === 'team' ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Goal" isActive={currentScreen === 'meta-health'} navigateTo={() => navigateTo('meta-health')}>
                        <HealthIcon fillVar={currentScreen === 'meta-health' ? '--accent' : '--white'} />
                    </NavigationLink>

                    <NavigationLink label="Subscribe" isActive={currentScreen === 'footer'} navigateTo={() => navigateTo('footer')}>
                        <SendIcon fillVar={currentScreen === 'footer' ? '--accent' : '--white'} />
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
                    <a className="inline-block p-1 bg-dark-blue rounded-md" href="https://t.me/CGMArmy" target="_blank">
                        <TelegramIcon size={20} />
                    </a>
                </li>
                <li>
                    <a href="/docs/v1.6.6_Cows_Gone_Mad_Whitepaper_2024.pdf" download={true} 
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
