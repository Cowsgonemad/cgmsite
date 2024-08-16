import { GameTab } from './GameTab';

export const GameTabTrailer = ({ isActive }: { isActive: boolean }) => {

    return(
        <GameTab isActive={isActive}>

            <div className="w-full bg-black rounded-3xl p-8">
                <iframe className="size-full min-h-72 md:min-h-96 xl:h-[600px] rounded-3xl"
                src="https://www.youtube.com/embed/lWP2gPo_8FQ?si=kuelZTJilo2nrgQ7" 
                title="Cows Gone Mad Concept Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </GameTab>
    );
};
