import { Screen } from '../../layout';
import { Arrows } from '../../ui';
import { NFTExtraTab, NFTFeaturesTab, NFTGoalsTab, NFTIllustrationsTab } from '.';
import { useState } from 'react';

export const NFTSection = () => {

    const [nftTab, setNftTab] = useState(0);
    const [nft, setNft] = useState(1);

    const activeImage = 'translate-y-0 shrink-0 transition duration-20 cursor-pointer';
    const inactiveImage = 'shrink-0 lg:translate-y-12 hover:translate-y-0 transition duration-20 cursor-pointer';

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
        <Screen id="the-nft" containerClasses="bg-white relative">

            <div className="size-full relative pt-28 flex px-6">

                <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5"></div>
                
                <div className="size-full xl:max-w-[99%] 2xl:max-w-[90%] flex justify-center mx-auto 2xl:h-[800px] xl:mt-auto transition duration-20 relative" style={{}}>
                    <Arrows prev={prev} next={next} />

                    <NFTIllustrationsTab isActive={nftTab == 0} nft={nft} />
                    <NFTFeaturesTab isActive={nftTab == 1} />
                    <NFTGoalsTab isActive={nftTab == 2} />
                    <NFTExtraTab isActive={nftTab === 3} />
                </div>
            </div>

            {nftTab === 0 && 
            <div className="absolute left-0 bottom-0 w-full max-w-full overflow-x-auto invisible-scroller text-center">
                <ul className="inline-grid grid-cols-cows-min lg:grid-cols-cows-max gap-3 align-middle">
                    {Array.from(Array(9).keys()).map(n => 
                        n !== 0 && <li key={n} className={nft === n ? activeImage : inactiveImage} onClick={() => setNft(n)}>
                            <img src={`/img/c${n}.gif`} alt="NFT Illustration"
                            className="block w-full rounded-t-full cow-drop border-4 border-b-0 border-black" />
                        </li>
                    )}
                </ul>
            </div>}

        </Screen>
    );
};
