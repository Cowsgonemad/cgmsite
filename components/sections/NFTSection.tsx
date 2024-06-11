import { Screen } from '../layout';

export const NFTSection = ({ progress }: { progress: number }) => {

    const containerStyle = { left: `-${100 - progress}%` };
    const contentStyle = { opacity: progress * 1 / 100, transform: `translateY(${100 - progress}px)` };
    
    return(
        <Screen containerClasses="flex items-center justify-center" containerStyle={containerStyle}>
            <div className="content size-full bg-nfts">

                {/* <div className="bg-halftone absolute size-full top-0 left-0 opacity-30 -z-10"></div> */}

                <div className="size-full flex items-center justify-center">
                    <div className="w-full max-w-prose drop-shadow-nft transition duration-20" style={contentStyle}>

                        <div className="bg-black bg-opacity-90 p-10 rounded-lg">
                            <h3 className="text-accent text-5xl tracking-wider text-center">
                                NFT Collection
                            </h3>
                        </div>
                        
                        <div className="bg-white text-black p-10 rounded-lg mt-4">
                            <p className="text-xl text-justify font-extralight">
                            This collection celebrates the courage and innovation demonstrated during the battle, serving as a tribute to those who stood hoof-in-hand against formidable foes. By incorporating historical context about the fight against <strong className="font-extrabold">Mad Cow Disease</strong>, the collection also serves an educational purpose, reminding us of the importance of ethical animal treatment and the consequences of human interference in natural processes.
                            </p>
                        </div>

                    </div>
                </div>
                
            </div>
        </Screen>
    );
};
