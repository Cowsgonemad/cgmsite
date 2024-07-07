import { NFTGoalBg1, NFTGoalBg2,  } from '.';

export const NFTGoalElement = ({
    type,
    percentage,
    children
}: {
    type: 'even' | 'odd',
    percentage: number,
    children: React.ReactNode
}) => {

    const odd = 'absolute top-0 left-3/20 px-1/20 pt-1/20';
    const even = 'absolute top-1/10 px-1/10 pt-1/20';

    return(
        <div className="w-full sm:w-1/2 md:w-1/3 shrink-0 relative p-2">

            {type === 'odd' ? <NFTGoalBg1 /> : <div className="translate-x-4 translate-y-16"><NFTGoalBg2 /></div>}
            
            <div className={type === 'odd' ? odd : even}>
                <div className="text-center">
                    <b className={`text-5xl lg:text-6xl font-screebie tracking-wider font-normal t-outline ${percentage > 80 ? 'text-pink' : 'text-accent'}`}>{percentage}%</b>
                </div>

                <div className="px-3/20 mt-1/10 text-center text-black text-lg xl:text-2xl font-extralight">
                    {children}
                </div>
            </div>
        </div>
    );
};
