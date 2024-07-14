import Image from 'next/image';
import { Screen } from '../../layout';
import { Arrows, SectionTitle } from '../../ui';
import { NFTCollectionTitle, NFTExtraTab, NFTFeaturesTab, NFTGoalsTab, NFTIllustrationsTab, NFTTab, TextBlob } from '.';
import { useState } from 'react';

export const NFTSection = () => {

    const [nftTab, setNftTab] = useState(0);
    const [nft, setNft] = useState('1');

    const activeImage = 'opacity-100 translate-y-0 transition duration-20 hover:opacity-100 w-20 lg:w-28 cursor-pointer';
    const inactiveImage = 'lg:opacity-40 lg:translate-y-12 transition duration-20 hover:opacity-100 w-20 lg:w-28 cursor-pointer';

    const next = (): void => {
        const num = Number(nftTab);
        if (num >= 3) setNftTab(0);
        else setNftTab((num + 1));
    };
    const prev = (): void => {
        const num = Number(nftTab);
        if (num <= 0) setNftTab(3);
        else setNftTab((num - 1));
    };
    
    return(
        <Screen id="the-nft" containerClasses="bg-white">

            <div className="size-full relative pt-28 flex px-6">

                <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5"></div>
                
                <div className="size-full xl:max-w-[99%] 2xl:max-w-[90%] flex justify-center mx-auto 2xl:h-screen-4/5 xl:mt-auto transition duration-20 relative" style={{}}>
                    <Arrows prev={prev} next={next} />

                    <NFTIllustrationsTab isActive={nftTab == 0} nft={nft} />
                    <NFTFeaturesTab isActive={nftTab == 1} />
                    <NFTGoalsTab isActive={nftTab == 2} />
                    <NFTExtraTab isActive={nftTab === 3} />

                    {nftTab === 0 && 
                    <ul className="absolute bottom-0 lg:right-20 flex items-end gap-2">
                        <li className={nft === '1' ? activeImage : inactiveImage} onClick={() => setNft('1')}>
                            <img src="/img/VACA1.svg" className="block w-full" alt="NFT name" />
                        </li>

                        <li className={nft === '2' ? activeImage : inactiveImage} onClick={() => setNft('2')}>
                            <img src="/img/VACA2.svg" className="block w-full" alt="NFT name" />
                        </li>

                        <li className={nft === '3' ? activeImage : inactiveImage} onClick={() => setNft('3')}>
                            <img src="/img/VACA3.svg" className="block w-full" alt="NFT name" />
                        </li>

                        <li className={nft === '4' ? activeImage : inactiveImage} onClick={() => setNft('4')}>
                            <img src="/img/VACA4.svg" className="block w-full" alt="NFT name" />
                        </li>
                    </ul>}
                </div>
            </div>

        </Screen>
    );
};
