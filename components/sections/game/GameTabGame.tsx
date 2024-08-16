import { GameTab } from './GameTab';

export const GameTabGame = ({ isActive }: { isActive: boolean }) => {

    return(
        <GameTab isActive={isActive}>
            <div className="w-full bg-black p-4 lg:p-8 text-white font-extralight text-lg 2xl:text-2xl text-center rounded-3xl">
                
                {/* <img className="inline-block w-52 lg:w-72 pb-4" src="/img/CGM-BFTPP-EDITABLE-PNG.png" alt="Cows Gone Mad: Battle For Pasture Prime Logo" /> */}

                <h5 className="font-extralight text-3xl text-accent mb-4">The New Blockchain Adventure</h5>

                <p className="text-justify">Join the fight today and becoming the reigning King of the pasture in the battle between Cows, Wolves and humans on the Solana Blockchain.</p>
                <p className="mt-4 text-justify">
                The purpose of <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong> is to offer a deeply engaging, multi-layered gaming experience that differentiates itself from other survival and strategy games through its integration of blockchain technology. This not only ensures transparency in transactions and player interactions but also allows for a decentralised governance model where players have significant control over the game’s evolution. The game’s unique premise of an uneasy alliance between different species after a world-altering event provides a fresh narrative backdrop that is both intriguing and ripe for exploration.
                </p>
            </div>
        </GameTab>
    );   
};
