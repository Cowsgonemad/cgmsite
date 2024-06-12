import Image from 'next/image';
import { Screen } from '../layout';

export const NFTSection = ({ progress, nft, setNft }: { progress: number, nft: string, setNft: (n: string) => void }) => {

    const containerStyle = { left: `-${100 - progress}%` };
    const contentStyle = { opacity: progress * 1 / 100, transform: `translateY(${100 - progress}px)` };
    const activeImage = 'opacity-100 transition duration-20 hover:opacity-100 cursor-pointer border-4 border-dark-grey';
    const inactiveImage = 'opacity-40 transition duration-20 hover:opacity-100 cursor-pointer border-4 border-dark-grey';
    
    return(
        <Screen containerClasses="flex items-center justify-center bg-black" containerStyle={containerStyle}>
           
            <div className="bg-halftone absolute size-full opacity-20 mix-dodge"></div>

            <div className="bg-blobs absolute size-full animate-bg-size"></div>

            <div className="w-full max-w-screen-lg transition duration-20 flex gap-12 bg-black bg-opacity-60 p-10" style={contentStyle}>

                <div className="shrink-0">
                    <Image src={`/img/nft-${nft}.jpg`} width="360" height="360" alt="NFT name" className="bdropshadow border-8 border-dark-grey" />
                </div>

                <div className="flex flex-col">
                    <h3 className="text-white text-5xl tracking-wider">
                        <span className="text-pink">NFT</span> Collection
                    </h3>
                
                    <div className="text-white text-xl text-justify font-extralight mt-6 mb-7">
                        <p>
                        This collection celebrates the courage and innovation demonstrated during the battle, serving as a tribute to those who stood hoof-in-hand against formidable foes. By incorporating historical context about the fight against <strong className="font-extrabold">Mad Cow Disease</strong>, the collection also serves an educational purpose, reminding us of the importance of ethical animal treatment and the consequences of human interference in natural processes.
                        </p>
                    </div>

                    <ul className="flex gap-8 mt-auto">
                        <li className={nft === '1' ? activeImage : inactiveImage} onClick={() => setNft('1')}>
                            <Image src="/img/nft-1.jpg" width="120" height="120" alt="NFT name" />
                        </li>

                        <li className={nft === '2' ? activeImage : inactiveImage} onClick={() => setNft('2')}>
                            <Image src="/img/nft-2.jpg" width="120" height="120" alt="NFT name" />
                        </li>

                        <li className={nft === '3' ? activeImage : inactiveImage} onClick={() => setNft('3')}>
                            <Image src="/img/nft-3.jpg" width="120" height="120" alt="NFT name" />
                        </li>

                        <li className={nft === '4' ? activeImage : inactiveImage} onClick={() => setNft('4')}>
                            <Image src="/img/nft-4.jpg" width="120" height="120" alt="NFT name" />
                        </li>

                        <li className={nft === '5' ? activeImage : inactiveImage} onClick={() => setNft('5')}>
                            <Image src="/img/nft-5.jpg" width="120" height="120" alt="NFT name" />
                        </li>
                        
                        <li className={nft === '6' ? activeImage : inactiveImage} onClick={() => setNft('6')}>
                            <Image src="/img/nft-6.jpg" width="120" height="120" alt="NFT name" />
                        </li>
                    </ul>        
                </div>
                
            </div>
            
                
        </Screen>
    );
};
