import { Logo } from '@/components/ui';
import { GameTab } from './GameTab';
import { FooterCow } from '../footer';

export const GameTabTrailer = ({ isActive }: { isActive: boolean }) => {

    return(
        <GameTab isActive={isActive}>

            <div className="w-full lg:w-2/5 2xl:w-1/3 bg-black bg-opacity-80 p-4 lg:p-8 2xl:p-8">

                <div className="w-1/3 lg:w-1/2 2xl:w-auto mx-auto mb-4">
                    <img src="/img/BOPP-PNG.png" alt="Battle Of Pasture Prime Logo" />
                </div>

                <p className="text-white font-extralight text-justify text-lg 2xl:text-2xl">
                Set in a post-meteoric world where cows, humans, and wolves fight for dominance, the game offers a unique blend of resource management, strategic alliances, and survival tactics, all influenced by real-time player decisions that are recorded on the blockchain.
                </p>
            </div>

            <div className="w-full lg:w-3/5 2xl:w-2/3 relative flex items-center justify-center p-6">

                {/* <video width="100%" height="100%" controls className="scale-95 object-cover">
                    <source src="/video/sample.mp4" />
                    Your browser does not support the video tag.
                </video> */}

                <div className="size-full flex items-center justify-center flex-col text-white font-screebie tracking-wider p-8 bg-black">
                    <p className="text-4xl xl:text-5xl">Coming Soon</p>
                </div>

                <div className="absolute bottom-6 right-0">
                    <FooterCow />
                </div>

                <div className="absolute top-6 left-0 rotate-180">
                    <FooterCow />
                </div>

                <img className="absolute top-0 left-0 size-full -z-10" src="/img/horizontal-frame.svg" alt="video frame" />
            </div>
        </GameTab>
    );
};
