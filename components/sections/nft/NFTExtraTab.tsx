import { SectionTitle } from '@/components/ui';
import { NFTTab } from './NFTTab';

export const NFTExtraTab = ({ isActive }: { isActive: boolean }) => {

    return(
        <NFTTab isActive={isActive}>
            <div className="text-white text-lg 2xl:text-xl text-justify font-extralight my-auto xl:mb-0 lg:mb-auto">

                <SectionTitle firstLine="Lorem" secondLine="Ipsum" />

                <div className="bg-black-blob mt-16 lg:px-3/20 lg:pt-16 pb-60 relative">

                    <div className="absolute w-[130%] -z-10 left-1/2 -top-24 -translate-x-1/2 hidden xl:block">
                        <img src="/img/extra-blob.svg" />
                    </div>
                    
                    <p>
                    This collection celebrates the courage and innovation demonstrated during the battle, serving as a tribute to those who stood hoof-in-hand against formidable foes. By incorporating historical context about the fight against <strong className="font-extrabold">Mad Cow Disease</strong>, the collection also serves an educational purpose, reminding us of the importance of ethical animal treatment and the consequences of human interference in natural processes.
                    </p>
                </div>
            </div>     
        </NFTTab>
    );
};
