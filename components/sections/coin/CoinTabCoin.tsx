import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';

export const CoinTabCoin = ({ isActive }: { isActive: boolean }) => {

    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Moo Moo Coin" />

            <p className="text-black text-lg font-light 2xl:text-2xl text-center mb-8">
            <strong className="font-extrabold">Moo Moo</strong> is a revolutionary token powering the <strong className="font-extrabold">Cows Gone Mad</strong> NFT collection and its immersive game, <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime.</strong> Built on the <strong className="font-extrabold">Solana blockchain</strong>, <strong className="font-extrabold">Moo Moo tokens</strong> offer scalability and low transaction fees, serving as the primary in-game currency. This integration bridges the digital art and gaming worlds, enabling NFT holders to seamlessly utilise their assets within the game and beyond.
            </p>
        </CoinTab>
    );
};
