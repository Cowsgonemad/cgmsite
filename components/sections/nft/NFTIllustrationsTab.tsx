import { NFTCollectionTitle } from './NFTCollectionTitle';
import { NFTTab } from './NFTTab';
import { TextBlob } from './TextBlob';

export const NFTIllustrationsTab = ({ isActive, nft }: { isActive: boolean, nft: number }) => {

    return(
        <NFTTab isActive={isActive}>
            <div className="shrink-0 lg:w-1/3 2xl:w-1/2 hidden lg:block">

                <img className="block ml-auto xl:mt-4 2xl:mt-8 2xl:mr-8 2xl:w-60 w-56 h-auto" src="/img/cgm-logo.png" alt="Cows Gone Mad Logo" />

                <div className="absolute bottom-0 w-1/2 z-10 px-8">
                    <img className="block w-3/5 2xl:w-auto mx-auto 2xl:mx-0 rounded-t-full cow-drop border-4 border-b-0 border-black" 
                    src={`/img/c${nft}.gif`} alt="NFT selected illustration" />
                </div>
            </div>

            <div className="flex flex-col lg:w-2/3 2xl:w-1/2 md:my-auto lg:-translate-x-6 pb-28 lg:pb-16 2xl:pb-32">
            
                <div className="text-black text-lg 2xl:text-2xl text-justify font-light">

                    <div className="block lg:hidden mb-8">
                        <img className="block mx-auto w-48 h-auto" src="/img/cgm-logo.png" alt="Cows Gone Mad Logo" />
                    </div>

                    <div className="w-1/2 lg:w-1/3 2xl:w-1/2 mb-16 lg:mb-4 mx-auto 2xl:mx-0">
                        <NFTCollectionTitle />
                    </div>
                    
                    <div className="bg-black-blob lg:px-1/10 lg:pt-1/20 lg:pb-20 2xl:px-0 2xl:pt-20 relative pb-2">

                        <div className="absolute w-[175%] -z-10 2xl:-left-64 -top-32 hidden 2xl:block">
                            <TextBlob />
                        </div>
                        
                        <p>
                            Step into the playful realm of the <strong className="font-extrabold">Moo NFT collection</strong>, where every digital cow bursts with personality and attitude. Each NFT in <strong className="font-extrabold">Cows Gone Mad</strong> transforms the chaos of the game's universe into a one-of-a-kind collectible—quirky, battle-ready, and brought to life on the <strong className="font-extrabold">Solana blockchain</strong>. Every cow tells its own story, loaded with unique traits and unexpected twists. Holding a <strong className="font-extrabold">Moo NFT</strong> means more than ownership—it's your ticket to unlocking in-game bonuses, exclusive features, and a front-row seat in the <strong className="font-extrabold">Cows Gone Mad</strong> adventure. Flaunt your rare cow, explore new privileges, and help shape the next chapter of the saga—all while being part of a community that celebrates creativity and fun at every turn.
                        </p>

                        <img className="block lg:hidden w-3/5 md:w-1/3 mx-auto mt-8 border-4 border-black rounded-3xl" src={`/img/c${nft}.gif`} alt="NFT selected illustration" />
                    </div>
                </div>     
            </div>
        </NFTTab>
    );
};
