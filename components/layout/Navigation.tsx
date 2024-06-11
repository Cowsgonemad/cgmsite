import { ArrowDownIcon, ArrowUpIcon, DiscordIcon, CoinIcon, ControlIcon, HomeIcon, InstagramIcon, TikTokIcon, XIcon, GoalIcon, SendIcon, TokenIcon } from '../icons';

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

            <nav className="border-b border-dark-grey flex justify-center p-4 bg-white rounded-tl-lg">
                <ul>

                    <li className="relative mb-2">
                        <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10">Start</div>
                        <button className="p-1" onClick={() => navigateTo(0)}>
                            <HomeIcon fillVar={currentScreen === 0 ? '--accent' : '--dark-grey'} />
                        </button>
                    </li>

                    <li className="relative mb-2">
                        <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10">The Coin</div>
                        <button className="p-1" onClick={() => navigateTo(1)}>
                            <CoinIcon fillVar={currentScreen === 1 ? '--accent' : '--dark-grey'} />
                        </button>
                    </li>

                    <li className="relative mb-2">
                        <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10">The Game</div>
                        <button className="p-1" onClick={() => navigateTo(2)}>
                            <ControlIcon fillVar={currentScreen === 2 ? '--accent' : '--dark-grey'} />
                        </button>
                    </li>

                    <li className="relative mb-2">
                        <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10">The NFT</div>
                        <button className="p-1" onClick={() => navigateTo(3)}>
                            <TokenIcon fillVar={currentScreen === 3 ? '--accent' : '--dark-grey'} />
                        </button>
                    </li>

                    <li className="relative mb-2">
                        <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10">Roadmap</div>
                        <button className="p-1" onClick={() => navigateTo(4)}>
                            <GoalIcon fillVar={currentScreen === 4 ? '--accent' : '--dark-grey'} />
                        </button>
                    </li>

                    <li className="relative">
                        <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10">Links</div>
                        <button className="p-1" onClick={() => navigateTo(5)}>
                            <SendIcon fillVar={currentScreen === 5 ? '--accent' : '--dark-grey'} />
                        </button>
                    </li>
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

            <div className="flex justify-center p-4 bg-dark-green rounded-bl-xl">
                <ul className="opacity-70 mt-2">
                    <li>
                        <a className="inline-block p-1">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a className="inline-block p-1">
                            <DiscordIcon />
                        </a>
                    </li>
                    <li>
                        <a className="inline-block p-1">
                            <XIcon />
                        </a>
                    </li>
                    <li>
                        <a className="inline-block p-1">
                            <TikTokIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
