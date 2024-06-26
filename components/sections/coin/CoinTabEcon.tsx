import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';
import { TokenomicsChart } from './TokenomicsChart';

export const CoinTabEcon = ({ isActive }: { isActive: boolean }) => {
    
    return(
        <CoinTab isActive={isActive}>

            <div className="rounded-lg mt-8 lg:bg-white lg:p-8">

                <div className="flex items-center gap-4">

                    <div className="hidden lg:block">
                        <TokenomicsChart />
                    </div>

                    <div className="border-dashed border-l-black lg:pl-8 lg:border-l-2">

                        <CoinTabTitle text="Tokenomics" />

                        <p className="text-black text-md font-light 2xl:font-extralight 2xl:text-xl text-center -mt-4">
                        The total supply of <strong className="font-extrabold">MooMoo tokens</strong> is capped at 1 billion tokens. In order to manage scarcity and value, and provide liquidity for game operations and market activities, the tokens are distributed for various purposes.
                        </p>
                    </div>

                </div>
            </div>
        </CoinTab>
    );
};
