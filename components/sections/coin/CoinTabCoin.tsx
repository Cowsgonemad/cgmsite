import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';

export const CoinTabCoin = ({ isActive }: { isActive: boolean }) => {

    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Moo Token" />

            <p className="text-black text-lg font-light 2xl:text-2xl text-justify">
                Step into the world of <strong className="font-extrabold">Moo</strong>—a next-generation token at the heart of the wild, unpredictable <strong className="font-extrabold">Cows</strong> Gone Mad universe. Fueling the chaos of <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong>, <strong className="font-extrabold">Moo</strong> transforms every player into both a creator and a competitor. Engineered on the <strong className="font-extrabold">Solana blockchain</strong> for lightning speed and ultra-low fees, <strong className="font-extrabold">Moo</strong> is your gateway to instant, action-packed gameplay and seamless <strong className="font-extrabold">NFT</strong> integration. Here, digital art and gaming collide: your <strong className="font-extrabold">NFTs</strong> aren’t just collectibles—they unlock possibilities inside the game and across the entire ecosystem. With <strong className="font-extrabold">Moo</strong> as your currency, every quest, trade, and upgrade brings you deeper into an experience where community, creativity, and <strong className="font-extrabold">Web3</strong> innovation run free. Unleash your ambition. Power your journey. Join <strong className="font-extrabold">Cows Gone Mad</strong>, and let <strong className="font-extrabold">Moo</strong> take you further than you dreamed possible.
            </p>
        </CoinTab>
    );
};
