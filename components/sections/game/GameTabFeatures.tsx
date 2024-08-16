import { useState } from 'react';
import { FeatureButton } from './FeatureButton';
import { GameTab } from './GameTab';

import styles from './GameTabFeatures.module.css';

export const GameTabFeatures = ({ isActive }: { isActive: boolean }) => {

    const [feat, setFeat] = useState('faction');

    return(
        <GameTab isActive={isActive}>

            <div className={styles.grid}>

                <ul className="flex lg:flex-col invisible-scroller">
                    <li className="w-72 lg:w-full shrink-0">
                        <FeatureButton isActive={feat === 'faction'} label="Faction Selection" onClick={() => {setFeat('faction')}} />
                    </li>
                    <li className="w-72 lg:w-full shrink-0">
                        <FeatureButton isActive={feat === 'resource'} label="Resource Management" onClick={() => {setFeat('resource')}} />
                    </li>
                    <li className="w-72 lg:w-full shrink-0">
                        <FeatureButton isActive={feat === 'quests'} label="Quests & Missions" onClick={() => {setFeat('quests')}} />
                    </li>
                    <li className="w-72 lg:w-full shrink-0">
                        <FeatureButton isActive={feat === 'survival'} label="Survival Element" onClick={() => {setFeat('survival')}} />
                    </li>
                    <li className="w-72 lg:w-full shrink-0">
                        <FeatureButton isActive={feat === 'blockchain'} label="Blockchain Integration" onClick={() => {setFeat('blockchain')}} />
                    </li>
                    <li className="w-72 lg:w-full shrink-0">
                        <FeatureButton isActive={feat === 'coop'} label="Cooperative & Multiplayer" onClick={() => {setFeat('coop')}} />
                    </li>
                </ul>
                
                <div className="bg-black p-4 lg:p-8 text-white font-extralight rounded-3xl text-justify">
                    <h5 className="font-extralight text-3xl text-accent mb-6">Game Features</h5>
                    <p className="text-lg 2xl:text-2xl">
                    Through a wide variety of features, options, customisations and opportunities become part of an ever expanding ecosystem today. With the chance to compete in tournaments with token prizes and earn limited rewards for completing tasks and missions and much more!
                    </p>
                </div>

                <div className="bg-black p-4 lg:p-8 text-white font-extralight text-center rounded-3xl">

                    <div className="text-lg 2xl:text-2xl text-justify">
                        {feat === 'faction' && <div>
                            <h5 className="font-extralight text-3xl text-accent mb-6">Faction Selection</h5>
                            <p>
                            Players can choose from a variety of unique factions, each with its own distinct abilities, strengths, and lore. This initial choice impacts gameplay style and strategy, offering diverse paths to victory and enriching the overall gaming experience.
                            </p></div>}
                        {feat === 'resource' && <div>
                            <h5 className="font-extralight text-3xl text-accent mb-6">Resource Management</h5>
                            <p>
                            Players must efficiently gather and manage resources such as food, water, and materials to build and upgrade their bases, sustain their factions, and gain strategic advantages. Effective resource management is crucial for survival and success in the game, requiring careful planning and prioritisation.
                            </p></div>}
                        {feat === 'quests' && <div>
                            <h5 className="font-extralight text-3xl text-accent mb-6">Quests & Missions</h5>
                            <p>
                            Embark on a variety of dynamic quests and missions that drive the storyline forward and offer exciting challenges. Completing these tasks rewards players with valuable resources, unique items, and experience points, enhancing their capabilities and advancing their progress in the game.
                            </p></div>}
                        {feat === 'survival' && <div>
                            <h5 className="font-extralight text-3xl text-accent mb-6">Survival Element</h5>
                            <p>
                            Players must navigate and endure harsh environments and unpredictable threats, such as wild predators, natural disasters, and rival factions. Survival elements require players to strategize, adapt, and make critical decisions to keep their faction alive and thriving amidst constant challenges.
                            </p></div>}
                        {feat === 'blockchain' && <div>
                            <h5 className="font-extralight text-3xl text-accent mb-6">Blockchain Integration</h5>
                            <p>
                            Leverage blockchain technology to ensure secure ownership of in-game assets, including items, resources, and NFTs. Blockchain integration allows for transparent, decentralised trading and transactions, providing players with true ownership and the ability to trade assets both within and outside the game ecosystem.
                            </p></div>}
                        {feat === 'coop' && <div>
                            <h5 className="font-extralight text-3xl text-accent mb-6">Cooperative & Multiplayer</h5>
                            <p>
                            Engage with other players through robust co-operative and multiplayer modes. Team up with friends to tackle challenging missions, form alliances to defend against common threats, or compete in PvP battles to test your skills against others. This feature enhances social interaction and strategic depth, making gameplay more dynamic and immersive.
                            </p></div>}
                    </div>
                </div>
                
            </div>
        </GameTab>
    )
};
