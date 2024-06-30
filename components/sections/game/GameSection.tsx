import { Screen } from '../../layout';
import { Waves } from '../coin';
import { GameTabFeatures } from './GameTabFeatures';
import { GameTabGame } from './GameTabGame';
import { GameTabTrailer } from './GameTabTrailer';
import { TabButton } from './TabButton';

export const GameSection = ({ tab, setTab }: { tab: string, setTab: (tab: string) => void }) => {

    // const containerStyle = { top: `${100 - progress}%` };
    // const contentStyle = { transform: `translateX(-${100 - progress}px)` };

    return(
        <Screen id="the-game" containerClasses="bg-land border-t-0">

            <div className="size-full flex flex-col items-center justify-center gap-8 relative pt-16 lg:pt-36 pb-14 px-6">

                <Waves style={{}} classes="absolute top-0 left-0 rotate-180 w-full z-10" />
                
                <div className="bg-black bg-opacity-80 size-full absolute right-0 top-0"></div>

                <div className="transition duration-20 w-full flex items-center order-2 lg:order-1">

                    <div className="xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-sm w-full mx-auto xl:h-screen-60 relative">
                        <GameTabTrailer isActive={tab === 'trailer'} />
                        <GameTabGame isActive={tab === 'game'} />
                        <GameTabFeatures isActive={tab === 'feat'} />
                    </div>  
                </div>

                <div className="flex xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-sm w-full order-1 lg:order-2 overflow-x-auto lg:overflow-x-hidden invisible-scroller">
                    <div className="flex gap-4 ml-auto">
                        <TabButton label="Trailer" active={tab === 'trailer'} onClick={() => setTab('trailer')} />
                        <TabButton label="The Game" active={tab === 'game'} onClick={() => setTab('game')} />
                        <TabButton label="Features" active={tab === 'feat'} onClick={() => setTab('feat')} />
                    </div>
                </div>
            </div>
        </Screen>
    );
};
