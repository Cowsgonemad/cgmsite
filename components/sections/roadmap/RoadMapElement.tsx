export const RoadmapElement = ({ percentage, children }: { percentage: number, children: React.ReactNode }) => {

    return(
        <div className="w-4/5 md:w-1/2 2xl:w-3/10 text-center border-2 border-dashed border-dark-grey px-6 pt-8 pb-6 shrink-0 bg-white bg-opacity-60 2xl:bg-transparent">
            <div className="text-center mb-4">
                <b className={`text-5xl font-screebie tracking-wider font-normal outline-drop ${percentage > 80 ? 'text-pink' : 'text-accent'}`}>{percentage}%</b>
            </div>

            {children}
        </div>
    );
};
