import { NFTCollectionTitle } from './NFTCollectionTitle';
import { NFTTab } from './NFTTab';
import { TextBlob } from './TextBlob';

export const NFTIllustrationsTab = ({ isActive, nft }: { isActive: boolean, nft: string }) => {

    return(
        <NFTTab isActive={isActive}>
            <div className="shrink-0 w-1/2 hidden lg:block">
                <div className="absolute bottom-0 w-3/5 z-10">
                    <img className="block w-3/5 2xl:w-auto mx-auto 2xl:mx-0" src={`/img/VACA${nft}.svg`} alt="name" />
                </div>
            </div>

            <div className="flex flex-col lg:w-1/2 md:my-auto lg:-translate-x-8 pb-28 lg:pb-16 2xl:pb-32">
            
                <div className="text-white text-lg 2xl:text-xl text-justify font-extralight">

                    <div className="w-1/3 lg:w-2/3 lg:pr-20 xl:pr-40 mb-16 2xl:mb-4 2xl:w-auto mx-auto xl:mx-0">
                        <NFTCollectionTitle />
                    </div>

                    <div className="bg-black-blob xl:px-1/5 pt-1/20 relative">

                        <div className="absolute w-[200%] xl:w-[130%] -z-10 -left-2/3 xl:-left-28 -top-40 xl:-top-24 hidden xl:block">
                            <TextBlob />
                        </div>
                        
                        <p>
                        This collection celebrates the courage and innovation demonstrated during the battle, serving as a tribute to those who stood hoof-in-hand against formidable foes. By incorporating historical context about the fight against <strong className="font-extrabold">Mad Cow Disease</strong>, the collection also serves an educational purpose, reminding us of the importance of ethical animal treatment and the consequences of human interference in natural processes.
                        </p>
                    </div>
                </div>     
            </div>
        </NFTTab>
    );
};
