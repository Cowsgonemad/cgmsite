import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';

export const CoinTabUtil = ({ isActive }: { isActive: boolean }) => {

    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Moo Moo Tokens" />

            <p className="text-black text-md font-light 2xl:text-xl text-center">
            <strong className="font-extrabold">The MooMoo token</strong> is the lifeblood of the <strong className="font-extrabold">Cows Gone Mad</strong> ecosystem, designed to facilitate seamless transactions, incentivise community engagement, and drive the project&apos;s overall growth and sustainability. Initially, its primary utility lies within the blockchain-based video game <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong>, where it serves as the main currency for purchasing in-game items, unlocking exclusive content, and participating in special events.
            </p>
        </CoinTab>
    );
};
