import Image from 'next/image';
import { Screen } from '../layout';
import { Waves } from '../ui';

const activeButton = '-skew-x-12 bg-accent uppercase py-1 px-4 w-36';
const inactiveButton = '-skew-x-12 bg-dark-green uppercase py-1 px-4 hover:bg-accent cursor-pointer w-36';
const activeText = 'skew-x-12 text-black font-extrabold text-sm';
const inactiveText = 'skew-x-12 text-white font-extrabold text-sm';

export const CoinSection = ({ progress, tab, setTab }: { progress: number, tab: string, setTab: (tab: string) => void }) => {

    const containerStyle = { top: `${progress <= 0 ? 100 : 0}%` };
    const circleStyle = { height: `${progress * 5}vh`, width: `${progress * 5}vh` };
    const contentStyle = { opacity: progress > 80 ? 100 : 0, transform: `translateY(-${100 - progress}px)` };
    const waveStyle = { opacity: progress * 1 / 100, transform: `translateY(${100 - progress}px)` };
    
    return(
        <Screen containerClasses="flex items-center justify-center" containerStyle={containerStyle}>

            <div className="rounded-full pink-gradient overflow-hidden transition duration-20" 
            style={circleStyle}>

                <div className="content size-full flex items-center justify-center transition duration-20"
                style={contentStyle}>

                    <div className="absolute top-0 left-0 size-full bg-squares -z-10 opacity-60"></div>

                    <div className="text-center w-full max-w-screen-md px-2 mx-auto">

                        <div className="animate-soft-bounce w-40 mx-auto">
                            <Image src="/img/coin.png" alt="Moo Moo Coin" width="160" height="160" />
                        </div>

                        <ul className="flex justify-center gap-4 my-8">
                        <li>
                            <button className={tab === 'coin' ? activeButton : inactiveButton} 
                            onClick={() => setTab('coin')}>
                            <span className={tab === 'coin' ? activeText : inactiveText}>The Coin</span>
                            </button>
                        </li>
                        <li>
                            <button className={tab === 'util' ? activeButton : inactiveButton}
                            onClick={() => setTab('util')}>
                            <span className={tab === 'util' ? activeText : inactiveText}>Utility</span>
                            </button>
                        </li>
                        <li>
                            <button className={tab === 'econ' ? activeButton : inactiveButton}
                            onClick={() => setTab('econ')}>
                            <span className={tab === 'econ' ? activeText : inactiveText}>Tokenomics</span>
                            </button>
                        </li>
                        <li>
                            <button className={tab === 'sust' ? activeButton : inactiveButton}
                            onClick={() => setTab('sust')}>
                            <span className={tab === 'sust' ? activeText : inactiveText}>Goals</span>
                            </button>
                        </li>
                        </ul>

                        <div className="relative h-72 mt-8 mb-8">
                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'coin' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'coin' ? 1 : 0
                            }}>

                                <h3 className="text-white mb-4 text-5xl tracking-wider">
                                    <span><span className="text-pink">The</span> Moo Moo <span className="text-pink">Coin</span></span>
                                </h3>

                                <p className="text-white font-thin text-xl">
                                <strong className="font-extrabold">The MooMoo token</strong> is an integral part of the <strong className="font-extrabold">Cows Gone Mad</strong> NFT collection and its accompanying video game, <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime.</strong> Designed on the Solana blockchain for its scalability and low transaction fees, MooMoo Solana tokens function as the primary in-game currency. These tokens link the digital art world with interactive gaming, allowing NFT holders to leverage their assets within the game environment and beyond.
                                </p>
                            </div>

                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'util' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'util' ? 1 : 0
                            }}>
                                <h3 className="text-white mb-4 text-5xl tracking-wider">
                                    <span><span className="text-pink">The</span> Moo Moo <span className="text-pink">Tokens</span></span>
                                </h3>

                                <p className="text-white font-thin text-xl">
                                <strong className="font-extrabold">The MooMoo token</strong> is the lifeblood of the <strong className="font-extrabold">Cows Gone Mad</strong> ecosystem, designed to facilitate seamless transactions, incentivise community engagement, and drive the project&apos;s overall growth and sustainability. Initially, its primary utility lies within the blockchain-based video game <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong>, where it serves as the main currency for purchasing in-game items, unlocking exclusive content, and participating in special events.
                                </p>
                            </div>

                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'econ' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'econ' ? 1 : 0
                            }}>
                                <h3 className="text-white mb-4 text-5xl tracking-wider">
                                    <span>Token<span className="text-pink">omics</span></span>
                                </h3>

                                <p className="text-white font-thin text-xl">
                                The total supply of <strong className="font-extrabold">MooMoo tokens</strong> is capped at 1 billion tokens. In order to manage scarcity and value, and provide liquidity for game operations and market activities, the tokens are distributed for various purposes including founders&apos; share, game development, ecosystem operations, rewarding NFT holders, marketing, and public sales. 
                                </p>
                            </div>

                            <div className="transition duration-20 absolute top-0" style={{
                                transform: tab === 'sust' ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: tab === 'sust' ? 1 : 0
                            }}>
                                <h3 className="text-white mb-4 text-5xl tracking-wider">
                                    <span><span className="text-pink">The</span> Goals</span>
                                </h3>

                                <p className="text-white font-thin text-xl">
                                Beyond the game, the MooMoo token supports broader goals, including funding the video game’s development and backing the <strong className="font-extrabold">MetaHealth Online Platform</strong>, aiming to revolutionize healthcare access with blockchain-based security and efficiency. 
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Waves classes="absolute bottom-0 left-0 transition duration-20" style={waveStyle} />
        </Screen>
    );
};
