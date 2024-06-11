import Image from 'next/image';
import { Screen } from '../layout';

export const GameSection = ({ progress, tab, setTab }: { progress: number, tab: string, setTab: (tab: string) => void }) => {

    const containerStyle = { top: `${100 - progress}%` };
    const contentStyle = { transform: `translateX(-${100 - progress}px)` };
    const activeTab = 'absolute w-full flex items-center gap-10 py-10 px-20 top-1/2 -translate-y-1/2 opacity-100 translate-x-0 transition duration-20';
    const inactiveTab = 'absolute w-full flex items-center gap-10 py-10 px-20 top-1/2 -translate-y-1/2 opacity-0 transition -translate-x-full duration-20';
    const activeLabel = 'bg-black text-pink py-6 transition duration-20 text-pink active-label rounded-tr-md rounded-br-md';
    const inactiveLabel = 'py-4 transition duration-20 text-dark-green';

    return(
        <Screen containerClasses="border-t-4 border-black" containerStyle={containerStyle}>
            <div className="size-full bg-land flex items-center justify-center">

                <div className="transition duration-20 h-5/6 w-full" style={contentStyle}>

                    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-full mx-auto h-full flex relative">

                        <div className={tab === 'game' ? activeTab : inactiveTab}>
                            <div className="w-full">
                                <Image src="/img/cover.jpg" height="600" width="600" alt="Cover Art"/>
                            </div>

                            <div className="w-full">
                                <h3 className="text-white mb-4 text-4xl text-shadow-dark tracking-wider">The Battle Of Pasture Prime</h3>
                                <h5 className="font-thin text-2xl text-accent mb-4">The New Blockchain Adventure</h5>
                                <p className="text-white font-thin text-xl"><strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong> is a blockchain based survival and quest-type video game set in a world where cows, humans, and wolves vie for dominance.</p>
                                <p className="text-white font-thin text-xl mt-4">
                                The purpose of <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong> is to offer a deeply engaging, multi-layered gaming experience that differentiates itself from other survival and strategy games through its integration of blockchain technology. This not only ensures transparency in transactions and player interactions but also allows for a decentralised governance model where players have significant control over the game’s evolution. The game’s unique premise of an uneasy alliance between different species after a world-altering event provides a fresh narrative backdrop that is both intriguing and ripe for exploration.
                                </p>
                            </div>
                        </div>

                        <div className={tab === 'feat' ? activeTab : inactiveTab}>
                            <div className="w-full">
                                <iframe width="100%" height="400" className="rounded-lg shrink-0"
                                src="https://www.youtube.com/embed/K4TOrB7at0Y?si=dmLHejSkOfOnk3kH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>

                            <div className="w-full">
                                <h3 className="text-white mb-4 text-4xl text-shadow-dark tracking-wider">The Game</h3>
                                <h5 className="font-thin text-2xl text-accent mb-4">Key Features</h5>

                                <p className="text-white font-thin text-xl mb-8">
                                Set in a post-meteoric world where cows, humans, and wolves vie for dominance, the game offers a unique blend of resource management, strategic alliances, and survival tactics, all influenced by real-time player decisions that are recorded on the blockchain.
                                </p>
                                
                                <ul className="text-white uppercase font-bold text-sm grid grid-cols-2 gap-4">
                                    <li className="border-2 border-accent p-4 feature-shadow">Faction Selection</li>
                                    <li className="border-2 border-accent p-4 feature-shadow">Resource Management</li>
                                    <li className="border-2 border-accent p-4 feature-shadow">Quests & Missions</li>
                                    <li className="border-2 border-accent p-4 feature-shadow">Survival Elements</li>
                                    <li className="border-2 border-accent p-4 feature-shadow">Blockchain Integration</li>
                                    <li className="border-2 border-accent p-4 feature-shadow">Cooperative & Multiplayer</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-accent absolute right-0 h-full game-tab flex flex-col">
                            <button className={tab === 'game' ? activeLabel : inactiveLabel} onClick={() => setTab('game')}>
                                <h4 className="uppercase font-bold text-3xl vertical">The Game</h4>
                            </button>

                            <button className={tab === 'feat' ? activeLabel : inactiveLabel} onClick={() => setTab('feat')}>
                                <h4 className="uppercase font-bold text-3xl vertical">Features</h4>
                            </button>
                        </div>
                        
                        <div className="bg-black w-4/5 h-full absolute -z-10 right-0 top-0"></div>
                    </div>
                        
                </div>

            </div>
        </Screen>
    );
};
