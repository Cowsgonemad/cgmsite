import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import { Screen } from '../layout';

export const RoadmapSection = ({ 
    progress, roadProgress, back, forward 
}: { 
    progress: number, roadProgress: number, back: () => void, forward: () => void
}) => {

    const containerStyle = { left: `${100 - progress}%` };
    const contentStyle = {transform: `translateX(-${roadProgress}%)`};

    return(
        <Screen containerClasses="bg-halftone" containerStyle={containerStyle}>
            <div className="max-w-screen-lg mx-auto px-4 h-full flex items-center">
                <div>

                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-dark-grey mb-2 text-5xl tracking-wider">The Roadmap</h3>
                            <p  className="text-dark-grey mb-12 text-lg">
                                <strong className="font-extrabold">Cows Gone Map</strong> project timeline
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button className="border-4 border-dark-grey" onClick={back}>
                                <ChevronLeftIcon />
                            </button>
                            <button className="border-4 border-dark-grey" onClick={forward}>
                                <ChevronRightIcon />
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex gap-8 w-full transition duration-20" style={contentStyle}>

                            <div className="card w-1/4 shrink-0 border-4 border-dark-grey bg-accent">
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <b className="text-6xl text-dark-grey font-extrabold">100%</b>
                                </div>
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <h5 className="text-lg text-dark-grey font-extrabold">
                                        Website Launch
                                    </h5>
                                </div>
                                <div className="p-4">
                                    <p className="text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                                </div>
                            </div>

                            <div className="card w-1/4 shrink-0 border-4 border-dark-grey bg-accent">
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <b className="text-6xl text-dark-grey font-extrabold">100%</b>
                                </div>
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <h5 className="text-lg text-dark-grey font-extrabold">
                                        Social Media Channels
                                    </h5>
                                </div>
                                <div className="p-4">
                                    <p className="text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                                </div>
                            </div>

                            <div className="card w-1/4 shrink-0 border-4 border-dark-grey">
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <b className="text-6xl text-dark-grey font-extrabold">40%</b>
                                </div>
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <h5 className="text-lg text-dark-grey font-extrabold">
                                        The Revelation
                                    </h5>
                                </div>
                                <div className="p-4">
                                    <p className="text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                                </div>
                            </div>

                            <div className="card w-1/4 shrink-0 border-4 border-dark-grey">
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <b className="text-6xl text-dark-grey font-extrabold">70%</b>
                                </div>
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <h5 className="text-lg text-dark-grey font-extrabold">
                                        Airdrop
                                    </h5>
                                </div>
                                <div className="p-4">
                                    <p className="text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                                </div>
                            </div>

                            <div className="card w-1/4 shrink-0 border-4 border-dark-grey">
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <b className="text-6xl text-dark-grey font-extrabold">2%</b>
                                </div>
                                <div className="p-4 border-b-4 border-dark-grey text-center">
                                    <h5 className="text-lg text-dark-grey font-extrabold">
                                        Special Quests
                                    </h5>
                                </div>
                                <div className="p-4">
                                    <p className="text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit quia libero voluptas voluptatem pariatur, aut ducimus nam nisi, numquam eum iusto error tempore molestiae porro consequuntur at fugiat reprehenderit.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                
                </div>
            </div>
        </Screen>
    );
};
