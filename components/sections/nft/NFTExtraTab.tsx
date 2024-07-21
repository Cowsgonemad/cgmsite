import { SectionTitle } from '@/components/ui';
import { NFTTab } from './NFTTab';

export const NFTExtraTab = ({ isActive }: { isActive: boolean }) => {

    return(
        <NFTTab isActive={isActive}>
            <div className="text-black text-lg lg:text-2xl text-center font-light lg:font-extralight my-auto xl:mb-0 lg:mb-auto">

                <SectionTitle firstLine="BACKGROUND" secondLine="And Legacy" />

                <div className="bg-black-blob mt-16 lg:px-3/20 lg:pt-16 pb-28 xl:pb-32 relative">

                    <div className="absolute w-[130%] -z-10 left-1/2 -top-24 -translate-x-1/2 hidden xl:block">
                        <img src="/img/extra-blob.svg" />
                    </div>

                    <img className="inline-block w-40 lg:w-64 h-40 lg:h-64 object-cover border-2 border-dashed border-neutral-300 rounded-3xl md:float-left mr-4" src="/img/Origin.png" alt="Initial Cow Illustration" />
                    
                    <p className="text-justify">
                    This collection celebrates the courage and innovation demonstrated during the battle, serving as a tribute to those who stood hoof-in-hand against formidable foes. By incorporating historical context about the fight against <strong className="font-extrabold">Mad Cow Disease</strong>, the collection also serves an educational purpose, reminding us of the importance of ethical animal treatment and the consequences of human interference in natural processes.
                    </p>
                </div>
            </div>     
        </NFTTab>
    );
};
