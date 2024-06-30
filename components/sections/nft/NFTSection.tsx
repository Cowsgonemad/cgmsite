import Image from 'next/image';
import { Screen } from '../../layout';
import { Arrows, SectionTitle } from '../../ui';
import { NFTCollectionTitle, NFTExtraTab, NFTGoalsTab, NFTIllustrationsTab, NFTTab, TextBlob } from '.';

export const NFTSection = ({ 
    nft,
    tab, 
    setNft,
    setTab 
}: { 
    nft: string, 
    tab: number,
    setNft: (n: string) => void,
    setTab: (n: number) => void
}) => {

    // const containerStyle = { left: `-${100 - progress}%` };
    // const contentStyle = { opacity: progress * 1 / 100, transform: `translateY(${100 - progress}px)` };
    const activeImage = 'opacity-100 translate-y-0 transition duration-20 hover:opacity-100 cursor-pointer';
    const inactiveImage = 'opacity-40 translate-y-12 transition duration-20 hover:opacity-100 cursor-pointer';

    const next = (): void => {
        const num = Number(tab);
        if (num >= 2) setTab(0);
        else setTab((num + 1));
    };
    const prev = (): void => {
        const num = Number(tab);
        if (num <= 0) setTab(2);
        else setTab((num - 1));
    };
    
    return(
        <Screen id="the-nft" containerClasses="bg-white">

            <div className="size-full relative pt-28 flex px-6">

                <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5"></div>
                
                <div className="size-full xl:max-w-[90%] flex justify-center mx-auto xl:h-screen-4/5 xl:mt-auto transition duration-20 relative" style={{}}>
                    <Arrows prev={prev} next={next} />

                    <NFTIllustrationsTab isActive={tab == 0} nft={nft} />
                    <NFTGoalsTab isActive={tab == 1} />
                    <NFTExtraTab isActive={tab === 2} />

                    {tab === 0 && 
                    <ul className="absolute bottom-0 right-20 items-end gap-2 hidden lg:flex">
                        <li className={nft === '1' ? activeImage : inactiveImage} onClick={() => setNft('1')}>
                            <Image src="/img/VACA1.svg" width="100" height="100" alt="NFT name" />
                        </li>

                        <li className={nft === '2' ? activeImage : inactiveImage} onClick={() => setNft('2')}>
                            <Image src="/img/VACA2.svg" width="100" height="100" alt="NFT name" />
                        </li>

                        <li className={nft === '3' ? activeImage : inactiveImage} onClick={() => setNft('3')}>
                            <Image src="/img/VACA3.svg" width="100" height="100" alt="NFT name" />
                        </li>

                        <li className={nft === '4' ? activeImage : inactiveImage} onClick={() => setNft('4')}>
                            <Image src="/img/VACA4.svg" width="100" height="100" alt="NFT name" />
                        </li>
                    </ul>}
                </div>
            </div>

        </Screen>
    );
};
