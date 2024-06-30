import { useRef } from 'react';
import { Screen } from '../../layout';
import { SectionTitle } from '@/components/ui';
import { RoadmapElement } from './RoadmapElement';

export const RoadmapSection = () => {

    // const containerStyle = { left: `${100 - progress}%` };

    const scroller = useRef<HTMLDivElement>(null);

    const prev = () => {
        console.log('click');
        if (!scroller || !scroller.current) { return; }
        const total = scroller.current.scrollWidth;
        scroller.current.scrollTo({
            left: scroller.current.scrollLeft - (total / 4),
            behavior: 'smooth'
        });
    };

    const next = () => {
        console.log('click');
        if (!scroller || !scroller.current) { return; }
        const total = scroller.current.scrollWidth;
        scroller.current.scrollTo({
            left: scroller.current.scrollLeft + (total / 4),
            behavior: 'smooth'
        });
    };

    return(
        <Screen id="roadmap" containerClasses="bg-halftone">

            <div className="size-full flex flex-col items-center justify-center relative pt-28 pb-14 px-6">

                <div className="absolute top-0 left-0 size-full bg-roadmap"></div>

                <div className="flex mt-auto items-center justify-center gap-8 relative">

                    <button className="active:opacity-50" onClick={prev}>
                        <img src="/img/nft-prev.svg" className="w-12" alt="Previous" />
                    </button>
                    
                    <SectionTitle classes="text-center mt-auto" firstLine="Road" secondLine="MAP" />

                    <button className="active:opacity-50" onClick={next}>
                        <img src="/img/nft-next.svg" className="w-12" alt="Next" />
                    </button>
                </div>

                <div ref={scroller} className="transparent-scroller w-full lg:max-w-2xl 2xl:max-w-4xl flex overflow-x-auto mt-8 mb-auto gap-1/20 relative pb-4">

                    <RoadmapElement percentage={20}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda voluptas quod at. Quo nemo rerum magni, mollitia dolorum rem sit possimus.</p>
                    </RoadmapElement>
                    <RoadmapElement percentage={40}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda voluptas quod at. Quo nemo rerum magni, mollitia dolorum rem sit possimus.</p>
                    </RoadmapElement>
                    <RoadmapElement percentage={60}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda voluptas quod at. Quo nemo rerum magni, mollitia dolorum rem sit possimus.</p>
                    </RoadmapElement>
                    <RoadmapElement percentage={100}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda voluptas quod at. Quo nemo rerum magni, mollitia dolorum rem sit possimus.</p>
                    </RoadmapElement>

                </div>
            </div>
            
        </Screen>
    );
};
