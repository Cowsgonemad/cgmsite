import { GameTab } from './GameTab';

export const GameTabGame = ({ isActive }: { isActive: boolean }) => {

    return(
        <GameTab isActive={isActive}>
            <div className="shrink-0 relative w-full lg:w-1/3">
                {/* <Image className="block" src="/img/cover.jpg" height="500" width="500" alt="Cover Art"/> */}
                <img className="block absolute top-0 left-0 size-full object-cover object-center scale-95 min-h-96" src="/img/bg-game.png" alt="Cover Art" />
                <img className="block w-full h-full min-h-96" src="/img/vertical-frame.svg" alt="image frame" />
            </div>

            <div className="w-full lg:w-2/3 text-justify bg-black bg-opacity-80 p-4 lg:p-12 text-white font-extralight 2xl:text-xl">
                {/* <h3 className="text-white mb-4 text-5xl tracking-wider">The Battle Of Pasture Prime</h3> */}
                <h5 className="font-extralight text-2xl text-accent mb-4">The New Blockchain Adventure</h5>
                <p className=""><strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong> is a blockchain based survival and quest-type video game set in a world where cows, humans, and wolves vie for dominance.</p>
                <p className="mt-4">
                The purpose of <strong className="font-extrabold">Cows Gone Mad: Battle for Pasture Prime</strong> is to offer a deeply engaging, multi-layered gaming experience that differentiates itself from other survival and strategy games through its integration of blockchain technology. This not only ensures transparency in transactions and player interactions but also allows for a decentralised governance model where players have significant control over the game’s evolution. The game’s unique premise of an uneasy alliance between different species after a world-altering event provides a fresh narrative backdrop that is both intriguing and ripe for exploration.
                </p>
            </div>
        </GameTab>
    );   
};