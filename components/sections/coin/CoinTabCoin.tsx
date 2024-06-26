import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';

export const CoinTabCoin = ({ isActive }: { isActive: boolean }) => {

    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Moo Moo Coin" />

            <p className="text-black text-md font-light 2xl:font-extralight 2xl:text-xl text-center">
            <strong className="font-extrabold">The MooMoo token</strong> is an integral part of the <strong className="font-extrabold">Cows Gone Mad</strong> NFT collection and its accompanying video game, <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime.</strong> Designed on the Solana blockchain for its scalability and low transaction fees, MooMoo Solana tokens function as the primary in-game currency. These tokens link the digital art world with interactive gaming, allowing NFT holders to leverage their assets within the game environment and beyond.
            </p>
        </CoinTab>
    );
};
