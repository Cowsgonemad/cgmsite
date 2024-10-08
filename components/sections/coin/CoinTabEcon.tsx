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
                    The total supply of <strong className="font-extrabold">MooMoo tokens</strong> is capped at 1 billion tokens. In order to manage scarcity and value, and provide liquidity for game operations and market activities, the tokens are distributed for various purposes.
                    </p>
                </div>

            </div>
            
        </CoinTab>
    );
};
