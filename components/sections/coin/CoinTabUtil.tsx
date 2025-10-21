import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';

export const CoinTabUtil = ({ isActive }: { isActive: boolean }) => {

    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Moo Tokens" />

            <p className="text-black text-lg font-light 2xl:text-2xl text-justify">
                <strong className="font-extrabold">Moo tokens</strong> are more than currency—they're the lifeblood of the <strong className="font-extrabold">Cows Gone Mad</strong> ecosystem, powering every move both in-game and out. With <strong className="font-extrabold">Moo</strong>, your strategy comes alive: unlock exclusive gear, upgrade your experience, and dive into premium content whenever you play. Want to trade? <strong className="font-extrabold">Moo</strong> makes it simple—buy, sell, and exchange rare assets with ease, turning every achievement into a real reward. But <strong className="font-extrabold">Moo</strong> isn't just about gameplay. Every token holder becomes part of the decision-making circle, shaping the future of the project with a true voice in governance. This seamless integration drives vibrant community action, rewards creativity, and keeps the engine of <strong className="font-extrabold">Cows Gone Mad</strong> running strong. Join a movement where play, creativity, and community go hand in hand—<strong className="font-extrabold">Moo tokens</strong> are your ticket to it all.
            </p>
        </CoinTab>
    );
};
