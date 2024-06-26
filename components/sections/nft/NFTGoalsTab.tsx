import { Arrows, SectionTitle } from '@/components/ui';
import { NFTTab } from './NFTTab';
import { useRef } from 'react';
import { NFTGoalElement } from './NFTGoalElement';

export const NFTGoalsTab = ({ isActive }: { isActive: boolean }) => {

    const scroller = useRef<HTMLDivElement>(null);

    const prev = () => {

        if (!scroller || !scroller.current) { return; }
        const total = scroller.current.scrollWidth;
        scroller.current.scrollTo({
            left: scroller.current.scrollLeft - (total / 4),
            behavior: 'smooth'
        });
    };

    const next = () => {

        if (!scroller || !scroller.current) { return; }
        const total = scroller.current.scrollWidth;
        scroller.current.scrollTo({
            left: scroller.current.scrollLeft + (total / 4),
            behavior: 'smooth'
        });
    };

    return(
        <NFTTab isActive={isActive}>

            <div className="w-full xl:max-w-screen-2xl h-full flex flex-col justify-center">

                <div className="flex mt-auto mb-8 items-center justify-center gap-8">

                    <button className="active:opacity-50" onClick={prev}>
                        <img src="/img/nft-prev.svg" className="w-12" alt="Previous" />
                    </button>
                    
                    <SectionTitle classes="text-center mt-auto" firstLine="Road" secondLine="MAP" />

                    <button className="active:opacity-50" onClick={next}>
                        <img src="/img/nft-next.svg" className="w-12" alt="Next" />
                    </button>
                </div>
                
                <div ref={scroller} className="invisible-scroller w-full h-2/3 flex overflow-scroll">

                    <NFTGoalElement type="odd" percentage={100}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </NFTGoalElement>

                    <NFTGoalElement type="even" percentage={100}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </NFTGoalElement>

                    <NFTGoalElement type="odd" percentage={60}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </NFTGoalElement>

                    <NFTGoalElement type="even" percentage={40}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </NFTGoalElement>

                    <NFTGoalElement type="odd" percentage={30}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </NFTGoalElement>

                </div>
            </div>   
        </NFTTab>
    );
};
