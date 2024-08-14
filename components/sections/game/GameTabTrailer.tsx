import { Logo } from '@/components/ui';
import { GameTab } from './GameTab';
import { FooterCow } from '../footer';

export const GameTabTrailer = ({ isActive }: { isActive: boolean }) => {

    return(
        <GameTab isActive={isActive}>

            <div className="w-full lg:w-2/5 2xl:w-1/3 bg-black bg-opacity-80 p-4 lg:p-8 2xl:p-8">

                <div className="w-2/3 2xl:w-auto mx-auto mb-4">
                    <img src="/img/CGM-BFTPP-EDITABLE-PNG.png" alt="Battle For Pasture Prime Logo" />
                </div>

                <p className="text-white font-extralight text-justify text-lg 2xl:text-2xl">
                Set in a post-meteoric world where cows, humans, and wolves fight for dominance, the game offers a unique blend of resource management, strategic alliances, and survival tactics, all influenced by real-time player decisions that are recorded on the blockchain.
                </p>
            </div>

            <div className="w-full lg:w-3/5 2xl:w-2/3 relative flex items-center justify-center p-6 overflow-hidden">

                <iframe className="size-full min-h-80"
                src="https://www.youtube.com/embed/wtgkbi7NYUM?si=yKv232Kfw8H296F4" 
                title="YouTube video player" allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                <img className="absolute top-0 left-0 size-full -z-10" src="/img/horizontal-frame.svg" alt="video frame" />
            </div>
        </GameTab>
    );
};
