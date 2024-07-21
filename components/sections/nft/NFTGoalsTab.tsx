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



    return(
        <NFTTab isActive={isActive}>

            <div className="w-full xl:max-w-screen-2xl h-full flex flex-col justify-center">

                <div className="flex items-center justify-center gap-8">
                    <SectionTitle classes="text-center" firstLine="Road" secondLine="MAP" />
                </div>
                
                <div ref={scroller} 
                className="transparent-scroller rotated-scroller smaller-scroller overflow-x-scroll overflow-y-hidden mt-16 xl:mt-8 pb-4 pt-36 text-justify">
                    
                        <div className="flex">
                            <NFTGoalElement type="odd" percentage={25}>
                                <p><strong className="block mb-2 font-extrabold">Design & Development.</strong> Finalize unique NFT designs and develop smart contracts.</p>
                            </NFTGoalElement>

                            <NFTGoalElement type="even" percentage={50}>
                                <p><strong className="block mb-2 font-extrabold">Community Engagement.</strong> Launch marketing campaign and hold AMAs sneak peeks.</p>
                            </NFTGoalElement>

                            <NFTGoalElement type="odd" percentage={75}>
                                <p><strong className="block mb-2 font-extrabold">Presale & Public Sale.</strong> Conduct whitelist presale and launch public sale.</p>
                            </NFTGoalElement>

                            <NFTGoalElement type="even" percentage={100}>
                                <p><strong className="block mb-2 font-extrabold">Post-Launch.</strong> List on NFT marketplaces and implement royalties and fees.</p>
                            </NFTGoalElement>
                        </div>
                   
                </div>
            </div>   
        </NFTTab>
    );
};
