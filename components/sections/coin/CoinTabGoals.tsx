import { CoinTab } from './CoinTab';
import { CoinTabTitle } from './CoinTabTitle';
import { MooMooRoadmap } from './MooMooRoadmap';

export const CoinTabGoals = ({ isActive }: { isActive: boolean }) => {
    
    return(
        <CoinTab isActive={isActive}>

            <CoinTabTitle text="The Goals" />

            <p className="text-black text-lg font-light 2xl:text-2xl text-center">
            Beyond the game, the MooMoo token supports broader goals, including funding the video game’s development and backing the <strong className="font-extrabold">MetaHealth Online Platform</strong>, aiming to revolutionize healthcare access with blockchain-based security and efficiency. 
            </p>

            <MooMooRoadmap />

        </CoinTab>
    );
};
