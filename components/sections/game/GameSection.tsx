import { Screen } from '../../layout';
import { GameTabFeatures } from './GameTabFeatures';
import { GameTabGame } from './GameTabGame';
import { GameTabTrailer } from './GameTabTrailer';
import { TabButton } from './TabButton';

export const GameSection = ({ progress, tab, setTab }: { progress: number, tab: string, setTab: (tab: string) => void }) => {

    const containerStyle = { top: `${100 - progress}%` };
    const contentStyle = { transform: `translateX(-${100 - progress}px)` };

    return(
        <Screen id="the-game" containerClasses="" containerStyle={containerStyle}>
            <div className="size-full bg-land flex flex-col items-center justify-center p-4 gap-8">

                <div className="bg-black bg-opacity-80 size-full absolute right-0 top-0"></div>

                <div className="transition duration-20 size-full flex items-center" style={contentStyle}>

                    <div className="xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-sm w-full mx-auto h-full 2xl:h-4/5 relative">

                        <GameTabTrailer isActive={tab === 'trailer'} />
                        <GameTabGame isActive={tab === 'game'} />
                        <GameTabFeatures isActive={tab === 'feat'} />

                    </div>  
                </div>

                <div className="flex xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-sm w-full">
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
