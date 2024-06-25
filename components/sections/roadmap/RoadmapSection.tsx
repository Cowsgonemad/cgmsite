import { useRef } from 'react';
import { Screen } from '../../layout';
import { Arrows, SectionTitle } from '../../ui';
import { RoadMapElement } from './RoadMapElement';

export const RoadmapSection = ({ 
    progress
}: { 
    progress: number
}) => {

    const scroller = useRef<HTMLDivElement>(null);

    const containerStyle = { left: `${100 - progress}%` };

    const prev = () => {
        if (!scroller || !scroller.current) { return; }
        const total = scroller.current.scrollWidth;
        scroller.current.scrollTo({
            left: scroller.current.scrollLeft - (total / 6),
            behavior: 'smooth'
        });
        // scroller.current.scrollLeft = scroller.current.scrollLeft - (total / 6);
    };
    const next = () => {
        if (!scroller || !scroller.current) { return; }
        const total = scroller.current.scrollWidth;
        // scroller.current.scrollLeft = scroller.current.scrollLeft + (total / 6);
        scroller.current.scrollTo({
            left: scroller.current.scrollLeft + (total / 6),
            behavior: 'smooth'
        });
    };

    return(
        <Screen containerClasses="bg-print animate-bg-size flex items-center justify-center" containerStyle={containerStyle}>

            <Arrows prev={prev} next={next} />

            <div className="w-full xl:max-w-screen-2xl h-full flex flex-col justify-center">

                <SectionTitle firstLine="Road" secondLine="MAP" />

                <div ref={scroller} className="invisible-scroller w-full h-2/3 flex overflow-scroll">

                    <RoadMapElement type="odd" percentage={100}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </RoadMapElement>

                    <RoadMapElement type="even" percentage={100}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </RoadMapElement>

                    <RoadMapElement type="odd" percentage={60}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </RoadMapElement>

                    <RoadMapElement type="even" percentage={40}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </RoadMapElement>

                    <RoadMapElement type="odd" percentage={30}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi.</p>
                    </RoadMapElement>

                </div>
            </div>
        </Screen>
    );
};
