import Image from 'next/image';
import { Screen } from '../layout';
import { Arrows, NFTCollectionTitle } from '../ui';
import { TextBlob } from '../ui/TextBlob';

export const NFTSection = ({ progress, nft, setNft }: { progress: number, nft: string, setNft: (n: string) => void }) => {

    const containerStyle = { left: `-${100 - progress}%` };
    const contentStyle = { opacity: progress * 1 / 100, transform: `translateY(${100 - progress}px)` };
    const activeImage = 'opacity-100 translate-y-0 transition duration-20 hover:opacity-100 cursor-pointer';
    const inactiveImage = 'opacity-40 translate-y-12 transition duration-20 hover:opacity-100 cursor-pointer';

    const next = (): void => {
        const num = Number(nft);
        if (num >= 4) setNft('1');
        else setNft((num + 1).toString());
    };
    const prev = (): void => {
        const num = Number(nft);
        if (num <= 1) setNft('4');
        else setNft((num - 1).toString());
    };
    
    return(
        <Screen containerClasses="flex items-center justify-center bg-print animate-bg-size" containerStyle={containerStyle}>
           
            <div className="size-full max-w-screen-xl transition duration-20 flex gap-8 relative" style={contentStyle}>

                <div className="shrink-0 w-1/2">
                    <div className="absolute bottom-0 w-3/5 z-10">
                        <img className="block" src={`/img/VACA${nft}.svg`} alt="name" />
                    </div>
                </div>

                <div className="flex flex-col w-1/2 my-auto -translate-x-16 pb-32">
                
                    <div className="text-white text-xl text-justify font-extralight">

                        <div className="pr-40 mb-8">
                            <NFTCollectionTitle />
                        </div>

                        <div className="bg-black-blob px-28 pt-16 relative">

                            <div className="absolute w-[130%] -z-10 -left-28 -top-24">
                                <TextBlob />
                            </div>
                            
                            <p>
                            This collection celebrates the courage and innovation demonstrated during the battle, serving as a tribute to those who stood hoof-in-hand against formidable foes. By incorporating historical context about the fight against <strong className="font-extrabold">Mad Cow Disease</strong>, the collection also serves an educational purpose, reminding us of the importance of ethical animal treatment and the consequences of human interference in natural processes.
                            </p>
                        </div>
                    </div>     
                </div>
                
            </div>

            <Arrows prev={prev} next={next} />
            
            <ul className="absolute bottom-0 right-20 flex items-end gap-2">
                <li className={nft === '1' ? activeImage : inactiveImage} onClick={() => setNft('1')}>
                    <Image src="/img/VACA1.svg" width="120" height="120" alt="NFT name" />
                </li>

                <li className={nft === '2' ? activeImage : inactiveImage} onClick={() => setNft('2')}>
                    <Image src="/img/VACA2.svg" width="120" height="120" alt="NFT name" />
                </li>

                <li className={nft === '3' ? activeImage : inactiveImage} onClick={() => setNft('3')}>
                    <Image src="/img/VACA3.svg" width="120" height="120" alt="NFT name" />
                </li>

                <li className={nft === '4' ? activeImage : inactiveImage} onClick={() => setNft('4')}>
                    <Image src="/img/VACA4.svg" width="120" height="120" alt="NFT name" />
                </li>
            </ul> 
        </Screen>
    );
};
