import { Screen } from '../../layout';
import { CoinTabButton, CoinTabCoin, CoinTabEcon, CoinTabGoals, CoinTabUtil, CoinTunnel, MooMooCoinLogo, Waves } from '.';
import { useState } from 'react';
import { CoinGeckoLogo, DexScreenerLogo, DextoolsLogo } from '@/components/icons';

export const CoinSection = () => {

    const [coinTab, setCoinTab] = useState('coin');

    const list = [
        {src: '/img/info/1.jpg', alt: 'Step 1'},
        {src: '/img/info/2.jpg', alt: 'Step 2'},
        {src: '/img/info/3.jpg', alt: 'Step 3'},
        {src: '/img/info/4.jpg', alt: 'Step 4'},
        {src: '/img/info/5.jpg', alt: 'Step 5'},
        {src: '/img/info/6.jpg', alt: 'Step 6'},
        {src: '/img/info/7.jpg', alt: 'Step 7'},
        {src: '/img/info/8.jpg', alt: 'Step 8'},
        {src: '/img/info/9.jpg', alt: 'Step 9'},
        {src: '/img/info/10.jpg', alt: 'Step 10'},
        {src: '/img/info/11.jpg', alt: 'Step 11'}
    ];
    
    return(
        <Screen id="the-coin" containerClasses="bg-halftone">

            <div className="h-full flex flex-col items-center justify-center relative pt-28">

                <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5"></div>

                <div className="w-full flex items-center justify-center transition duration-20 my-auto relative">

                    <div className="text-center w-full md:max-w-screen-md lg:max-w-screen-lg px-6 mx-auto">

                        <div className="animate-soft-bounce flex justify-center">
                            <MooMooCoinLogo />
                        </div>

                        <p className="mt-8 text-center flex flex-wrap justify-center gap-2">
                            <span className="bg-black text-white py-1 px-3 font-light text-sm rounded-full min-w-48 inline-flex items-center justify-center">
                                See on <a href="https://dexscreener.com/solana/JJ4QpqUYzs9LUPrF6uJKQbkA4ofSnvkwQ3RBcVLFSjd" target="_blank" title="See on Dexscreener" className="ml-2"><DexScreenerLogo /> <span className="underline inline-flex items-center justify-center">Dexscreener</span></a>
                            </span>

                            <span className="bg-black text-white py-1 px-3 font-light text-sm rounded-full min-w-48 inline-flex items-center justify-center">
                                See on <a href="https://www.dextools.io/app/en/solana/pair-explorer/3hA61x61bks9Y81wnX54KwBPTbRuHGLBQPX6Z8A7Fh71?t=1726517903094" target="_blank" title="See on Dextools" className="ml-2"><DextoolsLogo /> <span className="underline inline-flex items-center justify-center">Dextools</span></a>
                            </span>

                            <span className="bg-black text-white py-1 px-3 font-light text-sm rounded-full min-w-48 inline-flex items-center justify-center">
                                See on <a href="https://www.coingecko.com/en/coins/moomoo-token" target="_blank" title="See on Dextools" className="ml-2"><CoinGeckoLogo /> <span className="underline inline-flex items-center justify-center">CoinGecko</span></a>
                            </span>
                        </p>

                        <ul className="flex justify-center flex-wrap gap-2 lg:gap-4 mt-8">
                            <li>
                                <CoinTabButton label="The Token" isActive={coinTab === 'coin'} onClick={() => setCoinTab('coin')}></CoinTabButton>
                            </li>
                            <li>
                                <CoinTabButton label="Utility" isActive={coinTab === 'util'} onClick={() => setCoinTab('util')}></CoinTabButton>
                            </li>
                            <li>
                                <CoinTabButton label="Tokenomics" isActive={coinTab === 'econ'} onClick={() => setCoinTab('econ')}></CoinTabButton>
                            </li>
                            <li>
                                <CoinTabButton label="Goals" isActive={coinTab === 'goals'} onClick={() => setCoinTab('goals')}></CoinTabButton>
                            </li>
                        </ul>

                        <div className="relative 2xl:h-screen-40 mt-10 mb-28 lg:mb-16 2xl:mb-28">

                            <CoinTabCoin isActive={coinTab === 'coin'} />
                            <CoinTabUtil isActive={coinTab === 'util'} />
                            <CoinTabEcon isActive={coinTab === 'econ'} />
                            <CoinTabGoals isActive={coinTab === 'goals'} />

                        </div>

                    </div>

                </div>

                <CoinTunnel />

                <div className="w-full hidden sm:block relative">
                    <Waves classes="transition duration-20" style={{}} />
                </div>
            </div>
            
        </Screen>
    );
};
