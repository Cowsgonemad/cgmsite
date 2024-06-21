import { Screen } from '../layout';
import { CoinTunnel, MooMooCoinLogo, MooMooRoadmap, TokenomicsChart, Waves } from '../ui';

const activeButton = 'bg-accent uppercase py-2 px-4 w-36 font-extrabold text-sm text-dark-green';
const inactiveButton = 'bg-dark-green uppercase py-2 px-4 hover:text-dark-green hover:bg-accent cursor-pointer w-36 font-extrabold text-sm text-accent';

export const CoinSection = ({ progress, tab, setTab }: { progress: number, tab: string, setTab: (tab: string) => void }) => {

    const containerStyle = { top: `${progress <= 0 ? 100 : 0}%` };
    const circleStyle = { height: `${progress * 5}vh`, width: `${progress * 5}vh` };
    const contentStyle = { opacity: progress > 80 ? 100 : 0, transform: `translateY(-${100 - progress}px)` };
    const waveStyle = { opacity: progress * 1 / 100, transform: `translateY(${100 - progress}px)` };
    
    return(
        <Screen containerClasses="flex items-center justify-center bg-white" containerStyle={containerStyle}>

            <div className="rounded-full overflow-hidden transition duration-20 bg-coin animate-bg-size" 
            style={circleStyle}>

                <div className="content size-full flex items-center justify-center transition duration-20"
                style={contentStyle}>

                    <div className="text-center w-full max-w-screen-lg px-2 mx-auto">

                        <div className="animate-soft-bounce flex justify-center">
                            <MooMooCoinLogo />
                        </div>

                        <ul className="flex justify-center gap-4 mt-8">
                            <li>
                                <button className={tab === 'coin' ? activeButton : inactiveButton} 
                                onClick={() => setTab('coin')}>
                                    The Coin
                                </button>
                            </li>
                            <li>
                                <button className={tab === 'util' ? activeButton : inactiveButton}
                                onClick={() => setTab('util')}>
                                    Utility
                                </button>
                            </li>
                            <li>
                                <button className={tab === 'econ' ? activeButton : inactiveButton}
                                onClick={() => setTab('econ')}>
                                    Tokenomics
                                </button>
                            </li>
                            <li>
                                <button className={tab === 'sust' ? activeButton : inactiveButton}
                                onClick={() => setTab('sust')}>
                                    Goals
                                </button>
                            </li>
                        </ul>

                        <div className="relative h-72 mt-4 mb-48">
                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'coin' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'coin' ? 1 : 0
                            }}>

                                <h3 className="text-dark-green mb-8 text-3xl font-outfit font-extrabold uppercase">
                                    The Moo Moo Coin
                                </h3>

                                <p className="text-black font-extralight text-xl text-justify">
                                <strong className="font-extrabold">The MooMoo token</strong> is an integral part of the <strong className="font-extrabold">Cows Gone Mad</strong> NFT collection and its accompanying video game, <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime.</strong> Designed on the Solana blockchain for its scalability and low transaction fees, MooMoo Solana tokens function as the primary in-game currency. These tokens link the digital art world with interactive gaming, allowing NFT holders to leverage their assets within the game environment and beyond.
                                </p>
                            </div>

                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'util' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'util' ? 1 : 0
                            }}>
                                <h3 className="text-dark-green mb-8 text-3xl font-outfit font-extrabold uppercase">
                                    The Moo Moo Tokens
                                </h3>

                                <p className="text-black font-extralight text-xl text-justify">
                                <strong className="font-extrabold">The MooMoo token</strong> is the lifeblood of the <strong className="font-extrabold">Cows Gone Mad</strong> ecosystem, designed to facilitate seamless transactions, incentivise community engagement, and drive the project&apos;s overall growth and sustainability. Initially, its primary utility lies within the blockchain-based video game <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong>, where it serves as the main currency for purchasing in-game items, unlocking exclusive content, and participating in special events.
                                </p>
                            </div>

                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'econ' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'econ' ? 1 : 0
                            }}>

                                <div className="bg-white rounded-lg mt-8 p-8">

                                    <div className="flex items-center gap-4">

                                        <TokenomicsChart />

                                        <div className="border-l-2 border-dashed border-l-black pl-8">

                                            <h3 className="text-dark-green mb-4 text-3xl font-outfit font-extrabold uppercase">
                                                Tokenomics
                                            </h3>

                                            <p className="text-black font-extralight text-xl text-justify">
                                            The total supply of <strong className="font-extrabold">MooMoo tokens</strong> is capped at 1 billion tokens. In order to manage scarcity and value, and provide liquidity for game operations and market activities, the tokens are distributed for various purposes.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'sust' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'sust' ? 1 : 0
                            }}>
                                <h3 className="text-dark-green mb-8 text-3xl font-outfit font-extrabold uppercase">
                                    The Goals
                                </h3>

                                <p className="text-black font-extralight text-xl text-justify mb-4">
                                Beyond the game, the MooMoo token supports broader goals, including funding the video game’s development and backing the <strong className="font-extrabold">MetaHealth Online Platform</strong>, aiming to revolutionize healthcare access with blockchain-based security and efficiency. 
                                </p>

                                <MooMooRoadmap />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <CoinTunnel />

            <Waves classes="absolute bottom-0 left-0 transition duration-20" style={waveStyle} />
        </Screen>
    );
};
