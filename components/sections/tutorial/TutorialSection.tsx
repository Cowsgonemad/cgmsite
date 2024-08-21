import { Screen } from "@/components/layout";
import { Carousel } from "@/components/ui";

export const TutorialSection = () => {

    const list = [
        {src: '/img/info/1.jpg', alt: 'Step 1'},
        {src: '/img/info/2.jpg', alt: 'Step 2'},
        {src: '/img/info/3.jpg', alt: 'Step 3'},
        {src: '/img/info/4.jpg', alt: 'Step 4'},
        {src: '/img/info/5.jpg', alt: 'Step 5'},
        {src: '/img/info/6.jpg', alt: 'Step 6'},
        {src: '/img/info/7.jpg', alt: 'Step 7'},
        {src: '/img/info/8.jpg', alt: 'Step 8'},
        {src: '/img/info/9.jpg', alt: 'Step 9'},
        {src: '/img/info/10.jpg', alt: 'Step 10'},
        {src: '/img/info/11.jpg', alt: 'Step 11'}
    ];

    return(
        <Screen id="tutorial" containerClasses="">

            <div className="hidden lg:block w-full max-w-full overflow-x-auto white-scroller">
                <div className="table-row">
                    <div className="table-cell border-b-4 border-black">
                        <img loading="lazy" className="h-[80vh] w-auto max-w-[unset]" src="/img/INFO-WEB-1.jpg" alt="" />
                    </div>
                    <div className="table-cell border-b-4 border-black">
                        <img loading="lazy" className="h-[80vh] w-auto max-w-[unset]" src="/img/INFO-WEB-2.jpg" alt="" />
                    </div>
                    <div className="table-cell border-b-4 border-black">
                        <img loading="lazy" className="h-[80vh] w-auto max-w-[unset]" src="/img/INFO-WEB-3.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="block lg:hidden">
                <Carousel list={list} />
            </div>
    
        </Screen>
    );
};
