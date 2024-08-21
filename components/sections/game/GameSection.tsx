import { useState } from 'react';
import { Screen } from '../../layout';
import { GameTabFeatures } from './GameTabFeatures';
import { GameTabGame } from './GameTabGame';
import { GameTabTrailer } from './GameTabTrailer';
import { TabButton } from './TabButton';

export const GameSection = () => {

    const [gameTab, setGameTab] = useState('trailer');

    return(
        <Screen id="the-game" containerClasses="">

            <div className="flex items-center mx-auto flex-col pt-20 pb-12 px-6 bg-dark-print animate-bg-size relative">

                <div className="w-80 xl:w-96 relative">
                    <img src="/img/CGM-BFTPP-EDITABLE-PNG.png" alt="Battle For Pasture Prime Logo" />
                </div>

                <div className="flex overflow-x-auto lg:overflow-x-hidden invisible-scroller">
                    <div className="flex gap-4 mr-auto ml-auto lg:mr-0">
                        <TabButton label="Trailer" active={gameTab === 'trailer'} onClick={() => setGameTab('trailer')} />
                        <TabButton label="The Game" active={gameTab === 'game'} onClick={() => setGameTab('game')} />
                        <TabButton label="Features" active={gameTab === 'feat'} onClick={() => setGameTab('feat')} />
                    </div>
                </div>
            </div>

            <div className="size-full flex flex-col items-center justify-center gap-8 relative bg-land px-6 pb-28">

                <div className="absolute size-full top-0 left-0 bg-black bg-opacity-60"></div>

                <div className="transition duration-20 w-full flex items-center mt-12">
                    <div className="lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-sm w-full mx-auto relative">
                        <GameTabTrailer isActive={gameTab === 'trailer'} />
                        <GameTabGame isActive={gameTab === 'game'} />
                        <GameTabFeatures isActive={gameTab === 'feat'} />
                    </div>  
                </div>
            </div>
        </Screen>
    );
};
