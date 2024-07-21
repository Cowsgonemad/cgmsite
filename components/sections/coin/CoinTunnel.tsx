import { TunnelBase } from './TunnelBase';
import { TunnelCoin } from './TunnelCoin';
import { TunnelLight } from './TunnelLight';

export const CoinTunnel = () => {

    return(
        <div className="absolute h-full w-36 top-0 z-10 overflow-hidden hidden left-4 -translate-y-10 xl:block 2xl:left-[10vw] 2xl:-translate-y-20">
            
            <div className="h-full absolute bottom-0 left-1/2 -translate-x-1/2 animate-opacity-flicker flex items-end">
                <TunnelLight />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 animate-coin-float">
                <TunnelCoin />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 animate-coin-float-2">
                <TunnelCoin />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 animate-coin-float-3">
                <TunnelCoin />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <TunnelBase />
            </div>
        </div>
    );
};
