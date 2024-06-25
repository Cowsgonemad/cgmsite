import { FeatureButton } from './FeatureButton';
import { GameTab } from './GameTab';

export const GameTabFeatures = ({ isActive }: { isActive: boolean }) => {

    return(
        <GameTab isActive={isActive}>

            <div className="shrink-0 relative w-full lg:w-1/3">
                {/* <Image className="block" src="/img/cover.jpg" height="500" width="500" alt="Cover Art"/> */}
                <img className="block absolute top-0 left-0 size-full object-cover object-center scale-95" 
                src="/img/sample.jpeg" alt="Cover Art" />
                <img className="block w-full h-full" src="/img/vertical-frame.svg" alt="image frame" />
            </div>

            <div className="w-full lg:w-2/3 text-justify">

                <div className="bg-black bg-opacity-80 p-4 lg:p-12 text-white font-extralight 2xl:text-xl">
                    <p className="">
                    Set in a post-meteoric world where cows, humans, and wolves vie for dominance, the game offers a unique blend of resource management, strategic alliances, and survival tactics, all influenced by real-time player decisions that are recorded on the blockchain.
                    </p>
                </div>
                
                <ul className="grid lg:grid-cols-3 gap-4 mt-8">
                    <li>
                        <FeatureButton label="Faction Selection" onClick={() => {}} />
                    </li>
                    <li>
                        <FeatureButton label="Resource Management" onClick={() => {}} />
                    </li>
                    <li>
                        <FeatureButton label="Quests & Missions" onClick={() => {}} />
                    </li>
                    <li>
                        <FeatureButton label="Survival Element" onClick={() => {}} />
                    </li>
                    <li>
                        <FeatureButton label="Blockchain Integration" onClick={() => {}} />
                    </li>
                    <li>
                        <FeatureButton label="Cooperative & Multiplayer" onClick={() => {}} />
                    </li>
                </ul>
            </div>
        </GameTab>
    )
};
