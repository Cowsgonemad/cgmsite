import { TunnelBase } from './TunnelBase';
import { TunnelCoin } from './TunnelCoin';
import { TunnelLight } from './TunnelLight';

export const CoinTunnel = () => {

    return(
        <div className="absolute h-[90vh] w-36 top-0 left-40 z-10">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-opacity-flicker">
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
