import Image from 'next/image';
import { Screen } from '../layout';
import { Waves } from '../ui';

export const GameSection = ({ progress, tab, setTab }: { progress: number, tab: string, setTab: (tab: string) => void }) => {

    const containerStyle = { top: `${100 - progress}%` };
    const contentStyle = { transform: `translateX(-${100 - progress}px)` };
    const activeTab = 'absolute size-full flex gap-10 p-10 opacity-100 translate-x-0 transition duration-20';
    const inactiveTab = 'absolute size-full flex gap-10 p-10 opacity-0 transition -translate-x-full duration-20';
    const activeLabel = 'bg-black text-accent py-6 transition duration-20';
    const inactiveLabel = 'bg-dark-grey py-4 transition duration-20 text-white hover:text-accent hover:border-accent';

    return(
        <Screen containerClasses="" containerStyle={containerStyle}>
            <div className="size-full bg-land flex items-center justify-center">

                <div className="transition duration-20 size-full" style={contentStyle}>

                    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-full mx-auto h-full flex relative">

                        <div className={tab === 'trailer' ? activeTab : inactiveTab}>

                            <div className="w-full my-auto">
                                <div className="-mx-10">
                                    <video width="100%" height="500" controls>
                                        <source src="/video/sample.mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                {/* <p className="text-white font-extralight text-xl my-8">
                                Set in a post-meteoric world where cows, humans, and wolves vie for dominance, the game offers a unique blend of resource management, strategic alliances, and survival tactics, all influenced by real-time player decisions that are recorded on the blockchain.
                                </p> */}
                            </div>
                        </div>

                        <div className={tab === 'game' ? activeTab : inactiveTab}>

                            <div className="flex gap-8 w-3/4 m-auto">
                                <div className="shrink-0">
                                    <Image src="/img/cover.jpg" height="500" width="500" alt="Cover Art"/>
                                </div>

                                <div className="w-full text-justify">
                                    {/* <h3 className="text-white mb-4 text-5xl tracking-wider">The Battle Of Pasture Prime</h3> */}
                                    <h5 className="font-extralight text-2xl text-accent mb-4">The New Blockchain Adventure</h5>
                                    <p className="text-white font-extralight text-xl"><strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong> is a blockchain based survival and quest-type video game set in a world where cows, humans, and wolves vie for dominance.</p>
                                    <p className="text-white font-extralight text-xl mt-4">
                                    The purpose of <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong> is to offer a deeply engaging, multi-layered gaming experience that differentiates itself from other survival and strategy games through its integration of blockchain technology. This not only ensures transparency in transactions and player interactions but also allows for a decentralised governance model where players have significant control over the game’s evolution. The game’s unique premise of an uneasy alliance between different species after a world-altering event provides a fresh narrative backdrop that is both intriguing and ripe for exploration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={tab === 'feat' ? activeTab : inactiveTab}>

                            <div className="text-center flex gap-8 w-3/4 m-auto">

                                <div className="shrink-0">
                                    <Image src="/img/cover.jpg" height="500" width="500" alt="Cover Art"/>
                                </div>

                                <div className="w-full text-justify">
                                    <p className="text-white font-extralight text-xl mb-4">
                                    Set in a post-meteoric world where cows, humans, and wolves vie for dominance, the game offers a unique blend of resource management, strategic alliances, and survival tactics, all influenced by real-time player decisions that are recorded on the blockchain.
                                    </p>

                                    <h5 className="font-extralight text-2xl text-accent mb-4">Key Features</h5>
                                    
                                    <ul className="text-white uppercase font-bold text-sm grid grid-cols-2 gap-4">
                                        <li className="border-2 border-accent px-4 py-3 feature-shadow">Faction Selection</li>
                                        <li className="border-2 border-accent px-4 py-3 feature-shadow">Resource Management</li>
                                        <li className="border-2 border-accent px-4 py-3 feature-shadow">Quests & Missions</li>
                                        <li className="border-2 border-accent px-4 py-3 feature-shadow">Survival Elements</li>
                                        <li className="border-2 border-accent px-4 py-3 feature-shadow">Blockchain Integration</li>
                                        <li className="border-2 border-accent px-4 py-3 feature-shadow">Cooperative & Multiplayer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="absolute right-0 h-full game-tab flex flex-col translate-x-full justify-center">

                            <button className={tab === 'trailer' ? activeLabel : inactiveLabel} onClick={() => setTab('trailer')}>
                                <h4 className="uppercase font-bold text-3xl vertical">Trailer</h4>
                            </button>

                            <button className={tab === 'game' ? activeLabel : inactiveLabel} onClick={() => setTab('game')}>
                                <h4 className="uppercase font-bold text-3xl vertical">The Game</h4>
                            </button>

                            <button className={tab === 'feat' ? activeLabel : inactiveLabel} onClick={() => setTab('feat')}>
                                <h4 className="uppercase font-bold text-3xl vertical">Features</h4>
                            </button>
                        </div>
                        
                        <div className="bg-black size-full absolute -z-10 right-0 top-0"></div>
                        <div className="bg-halftone absolute size-full opacity-20 mix-dodge -z-10"></div>
                    </div>
                        
                </div>

            </div>
        </Screen>
    );
};
