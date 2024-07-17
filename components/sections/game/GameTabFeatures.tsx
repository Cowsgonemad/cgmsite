import { useState } from 'react';
import { FeatureButton } from './FeatureButton';
import { GameTab } from './GameTab';

export const GameTabFeatures = ({ isActive }: { isActive: boolean }) => {

    const [feat, setFeat] = useState('faction');

    return(
        // <GameTab isActive={isActive}>

        //     <div className="shrink-0 relative w-full lg:w-1/3">
        //         <img className="block absolute top-0 left-0 size-full object-cover object-center scale-95 min-h-96" 
        //         src="/img/bg-game.png" alt="Cover Art" />
        //         <img className="block w-full h-full min-h-96" src="/img/vertical-frame.svg" alt="image frame" />
        //     </div>

        //     <div className="w-full lg:w-2/3 text-justify">

        //         <div className="bg-black bg-opacity-80 p-4 lg:p-8 text-white font-extralight mb-4">
        //             <p className="text-lg 2xl:text-2xl">
        //             Through a wide variety of features, options, customisations and opportunities become part of an ever expanding ecosystem today. With the chance to compete in tournaments with token prizes and earn limited rewards for completing tasks and missions and much more!
        //             </p>

        //             <hr className="opacity-10 my-4" />

        //             <div className="text-lg">
        //                 {feat === 'faction' && <p>
        //                     Players can choose from a variety of unique factions, each with its own distinct abilities, strengths, and lore. This initial choice impacts gameplay style and strategy, offering diverse paths to victory and enriching the overall gaming experience.
        //                 </p>}
        //                 {feat === 'resource' && <p>
        //                     Players must efficiently gather and manage resources such as food, water, and materials to build and upgrade their bases, sustain their factions, and gain strategic advantages. Effective resource management is crucial for survival and success in the game, requiring careful planning and prioritisation.
        //                 </p>}
        //                 {feat === 'quests' && <p>
        //                     Embark on a variety of dynamic quests and missions that drive the storyline forward and offer exciting challenges. Completing these tasks rewards players with valuable resources, unique items, and experience points, enhancing their capabilities and advancing their progress in the game.
        //                 </p>}
        //                 {feat === 'survival' && <p>
        //                     Players must navigate and endure harsh environments and unpredictable threats, such as wild predators, natural disasters, and rival factions. Survival elements require players to strategize, adapt, and make critical decisions to keep their faction alive and thriving amidst constant challenges.
        //                 </p>}
        //                 {feat === 'blockchain' && <p>
        //                     Leverage blockchain technology to ensure secure ownership of in-game assets, including items, resources, and NFTs. Blockchain integration allows for transparent, decentralised trading and transactions, providing players with true ownership and the ability to trade assets both within and outside the game ecosystem.
        //                 </p>}
        //                 {feat === 'coop' && <p>
        //                     Engage with other players through robust co-operative and multiplayer modes. Team up with friends to tackle challenging missions, form alliances to defend against common threats, or compete in PvP battles to test your skills against others. This feature enhances social interaction and strategic depth, making gameplay more dynamic and immersive.
        //                 </p>}
        //             </div>
        //         </div>
                
        //         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 2xl:gap-4 mt-4">
        //             <li>
        //                 <FeatureButton isActive={feat === 'faction'} label="Faction Selection" onClick={() => {setFeat('faction')}} />
        //             </li>
        //             <li>
        //                 <FeatureButton isActive={feat === 'resource'} label="Resource Management" onClick={() => {setFeat('resource')}} />
        //             </li>
        //             <li>
        //                 <FeatureButton isActive={feat === 'quests'} label="Quests & Missions" onClick={() => {setFeat('quests')}} />
        //             </li>
        //             <li>
        //                 <FeatureButton isActive={feat === 'survival'} label="Survival Element" onClick={() => {setFeat('survival')}} />
        //             </li>
        //             <li>
        //                 <FeatureButton isActive={feat === 'blockchain'} label="Blockchain Integration" onClick={() => {setFeat('blockchain')}} />
        //             </li>
        //             <li>
        //                 <FeatureButton isActive={feat === 'coop'} label="Cooperative & Multiplayer" onClick={() => {setFeat('coop')}} />
        //             </li>
        //         </ul>
        //     </div>
        // </GameTab>
        <GameTab isActive={isActive}>

            <div className="w-full text-justify">
                
                <div className="bg-black bg-opacity-80 p-4 lg:p-8 text-white font-extralight mb-4 text-center">

                    <img className="inline-block w-52 lg:w-72 pb-4" src="/img/CGM-BFTPP-EDITABLE-PNG.png" alt="Initial Cow Illustration" />

                    <p className="text-lg 2xl:text-2xl text-justify">
                    Through a wide variety of features, options, customisations and opportunities become part of an ever expanding ecosystem today. With the chance to compete in tournaments with token prizes and earn limited rewards for completing tasks and missions and much more!
                    </p>

                    <hr className="opacity-10 my-4" />

                    <div className="text-lg text-justify">
                        {feat === 'faction' && <p>
                            Players can choose from a variety of unique factions, each with its own distinct abilities, strengths, and lore. This initial choice impacts gameplay style and strategy, offering diverse paths to victory and enriching the overall gaming experience.
                        </p>}
                        {feat === 'resource' && <p>
                            Players must efficiently gather and manage resources such as food, water, and materials to build and upgrade their bases, sustain their factions, and gain strategic advantages. Effective resource management is crucial for survival and success in the game, requiring careful planning and prioritisation.
                        </p>}
                        {feat === 'quests' && <p>
                            Embark on a variety of dynamic quests and missions that drive the storyline forward and offer exciting challenges. Completing these tasks rewards players with valuable resources, unique items, and experience points, enhancing their capabilities and advancing their progress in the game.
                        </p>}
                        {feat === 'survival' && <p>
                            Players must navigate and endure harsh environments and unpredictable threats, such as wild predators, natural disasters, and rival factions. Survival elements require players to strategize, adapt, and make critical decisions to keep their faction alive and thriving amidst constant challenges.
                        </p>}
                        {feat === 'blockchain' && <p>
                            Leverage blockchain technology to ensure secure ownership of in-game assets, including items, resources, and NFTs. Blockchain integration allows for transparent, decentralised trading and transactions, providing players with true ownership and the ability to trade assets both within and outside the game ecosystem.
                        </p>}
                        {feat === 'coop' && <p>
                            Engage with other players through robust co-operative and multiplayer modes. Team up with friends to tackle challenging missions, form alliances to defend against common threats, or compete in PvP battles to test your skills against others. This feature enhances social interaction and strategic depth, making gameplay more dynamic and immersive.
                        </p>}
                    </div>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1 2xl:gap-4 mt-4">
                    <li>
                        <FeatureButton isActive={feat === 'faction'} label="Faction Selection" onClick={() => {setFeat('faction')}} />
                    </li>
                    <li>
                        <FeatureButton isActive={feat === 'resource'} label="Resource Management" onClick={() => {setFeat('resource')}} />
                    </li>
                    <li>
                        <FeatureButton isActive={feat === 'quests'} label="Quests & Missions" onClick={() => {setFeat('quests')}} />
                    </li>
                    <li>
                        <FeatureButton isActive={feat === 'survival'} label="Survival Element" onClick={() => {setFeat('survival')}} />
                    </li>
                    <li>
                        <FeatureButton isActive={feat === 'blockchain'} label="Blockchain Integration" onClick={() => {setFeat('blockchain')}} />
                    </li>
                    <li>
                        <FeatureButton isActive={feat === 'coop'} label="Cooperative & Multiplayer" onClick={() => {setFeat('coop')}} />
                    </li>
                </ul>
            </div>
        </GameTab>
    )
};
