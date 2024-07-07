import { Screen } from '../../layout';
import { CoinTabButton, CoinTabCoin, CoinTabEcon, CoinTabGoals, CoinTabUtil, CoinTunnel, MooMooCoinLogo, Waves } from '.';

export const CoinSection = ({ tab, setTab }: { tab: string, setTab: (tab: string) => void }) => {

    // const containerStyle = { top: `${progress <= 0 ? 100 : 0}%` };
    // const contentStyle = { opacity: progress > 80 ? 100 : 0, transform: `translateY(-${100 - progress}px)` };
    // const waveStyle = { opacity: progress * 1 / 100, transform: `translateY(${100 - progress}px)` };
    
    return(
        <Screen id="the-coin" containerClasses="bg-halftone">

            <div className="h-full flex flex-col items-center justify-center relative pt-28">

                <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5"></div>

                <div className="w-full flex items-center justify-center transition duration-20 my-auto relative">

                    <div className="text-center w-full md:max-w-screen-md lg:max-w-screen-lg px-6 mx-auto">

                        <div className="animate-soft-bounce flex justify-center">
                            <MooMooCoinLogo />
                        </div>

                        <ul className="flex justify-center flex-wrap gap-2 lg:gap-4 mt-8">
                            <li>
                                <CoinTabButton label="The Coin" isActive={tab === 'coin'} onClick={() => setTab('coin')}></CoinTabButton>
                            </li>
                            <li>
                                <CoinTabButton label="Utility" isActive={tab === 'util'} onClick={() => setTab('util')}></CoinTabButton>
                            </li>
                            <li>
                                <CoinTabButton label="Tokenomics" isActive={tab === 'econ'} onClick={() => setTab('econ')}></CoinTabButton>
                            </li>
                            <li>
                                <CoinTabButton label="Goals" isActive={tab === 'goals'} onClick={() => setTab('goals')}></CoinTabButton>
                            </li>
                        </ul>

                        <div className="relative 2xl:h-screen-40 mt-10 mb-20 xl:mb-0">

                            <CoinTabCoin isActive={tab === 'coin'} />
                            <CoinTabUtil isActive={tab === 'util'} />
                            <CoinTabEcon isActive={tab === 'econ'} />
                            <CoinTabGoals isActive={tab === 'goals'} />

                        </div>

                    </div>

                </div>

                <CoinTunnel />

                <div className="w-full hidden sm:block relative">
                    <Waves classes="transition duration-20" style={{}} />
                </div>
            </div>
            
        </Screen>
    );
};
