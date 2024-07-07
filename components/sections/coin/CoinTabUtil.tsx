import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';

export const CoinTabUtil = ({ isActive }: { isActive: boolean }) => {

    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Moo Moo Tokens" />

            <p className="text-black text-lg font-light 2xl:text-2xl text-center mb-8">
            <strong className="font-extrabold">Moo Moo tokens</strong> serve as the cornerstone of the <strong className="font-extrabold">Cows Gone Mad</strong> ecosystem, providing multifaceted utility both in and out of the game. Players use <strong className="font-extrabold">Moo Moo tokens</strong> to purchase in-game items, upgrades, and exclusive content, enhancing their gameplay experience. The tokens also facilitate player-to-player trading, allowing users to buy, sell, and trade valuable assets on the marketplace. Additionally, <strong className="font-extrabold">Moo Moo tokens</strong> grant holders governance rights, enabling them to participate in key project decisions and future developments. By integrating these utilities, <strong className="font-extrabold">Moo Moo tokens</strong> drive engagement, foster a thriving community, and ensure long-term value within the ecosystem.
            </p>
        </CoinTab>
    );
};
