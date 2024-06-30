import { Arrows, SectionTitle } from '@/components/ui';
import { NFTTab } from './NFTTab';
import { useRef } from 'react';
import { NFTGoalElement } from './NFTGoalElement';

export const NFTGoalsTab = ({ isActive }: { isActive: boolean }) => {

    const scroller = useRef<HTMLDivElement>(null);

    // const cwidth = scroller.current?.clientWidth;
    // const swidth = scroller.current?.scrollWidth;
    // const step = swidth! / 4;
    // const sdistance = swidth! - cwidth!;
    // const dots = Array.from({ length: Math.ceil(sdistance / step) + 1 }, (v,i) => i);

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

    // const jump = (p: number) => {
    //     if (!scroller || !scroller.current) { return; }
    //     scroller.current.scrollTo({
    //         left: step * p,
    //         behavior: 'smooth'
    //     });
    // };

    return(
        <NFTTab isActive={isActive}>

            <div className="w-full xl:max-w-screen-2xl h-full flex flex-col justify-center">

                <div className="flex items-center justify-center gap-8">

                    <button className="active:opacity-50 hidden lg:block" onClick={prev}>
                        <img src="/img/nft-prev.svg" className="w-12" alt="Previous" />
                    </button>
                    
                    <SectionTitle classes="text-center" firstLine="Road" secondLine="MAP" />

                    <button className="active:opacity-50 hidden lg:block" onClick={next}>
                        <img src="/img/nft-next.svg" className="w-12" alt="Next" />
                    </button>
                </div>

                {/* <div className="flex justify-center gap-2 mt-4">
                    {dots.map(d => 
                        <button key={d} 
                        className={`inline-block rounded-full h-4 w-4 cursor-pointer ${active === d ? 'bg-accent' : 'bg-dark-blue' }`}
                        onClick={() => jump(d)}></button>
                    )}
                </div> */}
                
                <div ref={scroller} className="w-full invisible-scroller flex overflow-x-scroll overflow-y-hidden mt-16 pb-20">

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
