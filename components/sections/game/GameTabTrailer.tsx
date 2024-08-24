import { Tv } from '@/components/ui';
import { GameTab } from './GameTab';

export const GameTabTrailer = ({ isActive }: { isActive: boolean }) => {

    const list = [
        {src: 'https://www.youtube.com/embed/fA5xm61VzdI?si=9pV82FOvM0v2LSZH', title: 'Cows Gone Mad: Battle for Pasture Prime - Gameplay Trailer'},
        {src: 'https://www.youtube.com/embed/lWP2gPo_8FQ?si=kuelZTJilo2nrgQ7', title: 'Cows Gone Mad: Battle For Pasture Prime | Teaser Trailer'}
    ];

    return(
        <GameTab isActive={isActive}>
            <Tv list={list} />
        </GameTab>
    );
};
