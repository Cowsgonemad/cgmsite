import { useRef } from 'react';
import { Screen } from '../layout';
import { Arrows, RoadmapBg1, RoadmapBg2 } from '../ui';

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

                <div className="w-full text-center mt-auto">
                    <h3 className="text-pink text-8xl title-drop-shadow">
                        Road
                        <span className="text-white text-6xl font-jester block -mt-6">MAP</span>
                    </h3>
                </div>

                <div ref={scroller} className="invisible-scroller w-full h-2/3 flex overflow-scroll">

                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full shrink-0 relative p-2">

                        <RoadmapBg1 />
                        
                        <div className="absolute top-0 left-8 px-6 pt-12">
                            <div className="text-center">
                                <b className="text-6xl text-pink font-screebie tracking-wider font-normal">100%</b>
                            </div>

                            <div className="px-8 mt-4 text-center text-white text-lg font-thin">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full shrink-0 relative p-2">

                        <div className="translate-x-4 translate-y-16">
                            <RoadmapBg2 />
                        </div>
                        
                        <div className="absolute top-8 px-6 pt-12">
                            <div className="text-center">
                                <b className="text-6xl text-pink font-screebie tracking-wider font-normal">100%</b>
                            </div>

                            <div className="px-8 mt-4 text-center text-white text-lg font-thin">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full shrink-0 relative p-2">

                        <RoadmapBg1 />
                        
                        <div className="absolute top-0 left-8 px-6 pt-12">
                            <div className="text-center">
                                <b className="text-6xl text-accent font-screebie tracking-wider font-normal">60%</b>
                            </div>

                            <div className="px-8 mt-4 text-center text-white text-lg font-thin">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full shrink-0 relative p-2">

                        <div className="translate-x-4 translate-y-16">
                            <RoadmapBg2 />
                        </div>
                        
                        <div className="absolute top-8 px-6 pt-12">
                            <div className="text-center">
                                <b className="text-6xl text-accent font-screebie tracking-wider font-normal">40%</b>
                            </div>

                            <div className="px-8 mt-4 text-center text-white text-lg font-thin">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full shrink-0 relative p-2">

                        <RoadmapBg1 />
                        
                        <div className="absolute top-0 left-8 px-6 pt-12">
                            <div className="text-center">
                                <b className="text-6xl text-accent font-screebie tracking-wider font-normal">60%</b>
                            </div>

                            <div className="px-8 mt-4 text-center text-white text-lg font-thin">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Screen>
    );
};
