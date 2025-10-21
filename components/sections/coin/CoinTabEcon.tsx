import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';
import { TokenomicsChart } from './TokenomicsChart';

export const CoinTabEcon = ({ isActive }: { isActive: boolean }) => {
    
    return(
        <CoinTab isActive={isActive}>

            <div className="flex flex-col md:flex-row gap-4">

                <div className="order-2 md:order-1">
                    <TokenomicsChart />
                    {/* <Chart width={220} /> */}
                </div>
                
                <div className="order-1 md:order-2 border-dashed border-l-white lg:pl-8 lg:border-l-2 flex flex-col justify-center">

                    <CoinTabTitle text="Tokenomics" />

                    <p className="text-black text-lg font-light 2xl:text-2xl text-justify">
                        The <strong className="font-extrabold">Moo token</strong> supply is purposefully capped at 1 billion, ensuring every token counts and scarcity drives true demand. This structure fuels meaningful activity across the entire <strong className="font-extrabold">Cows Gone Mad</strong> universe. By carefully allocating <strong className="font-extrabold">Moo tokens</strong> for game liquidity, community rewards, strategic development, and ongoing marketplace action, our distribution keeps both gameplay and the ecosystem dynamic, fair, and thriving—today and for the future.
                    </p>
                </div>

            </div>
            
        </CoinTab>
    );
};
