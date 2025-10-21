import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';
import { MooMooRoadmap } from './MooMooRoadmap';

export const CoinTabGoals = ({ isActive }: { isActive: boolean }) => {
    
    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Goals" />

            <p className="text-black text-lg font-light 2xl:text-2xl text-justify">
                Beyond powering in-game action, <strong className="font-extrabold">Moo token</strong> is designed to unlock bigger possibilities. It helps drive the ongoing development of our video game and fuels the innovative <strong className="font-extrabold">MetaHealth</strong> Online Platform—an ambitious effort to transform healthcare access with secure, <strong className="font-extrabold">blockchain-enabled</strong> tools. Each milestone—from community launches and project partnerships to full game features and wider marketplace access—pushes the ecosystem, and everyone in it, forward.
            </p>

            <MooMooRoadmap />

        </CoinTab>
    );
};
