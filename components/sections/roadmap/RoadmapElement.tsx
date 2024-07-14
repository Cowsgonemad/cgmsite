export const RoadmapElement = ({ 
    title,
    subtitle, 
    children 
}: { 
    title: string,
    subtitle: string, 
    children: React.ReactNode 
}) => {

    return(
        <div className="w-4/5 md:w-1/2 2xl:w-49/100 border-2 border-dashed border-dark-grey px-4 py-4 shrink-0 bg-white bg-opacity-60 2xl:bg-transparent">

            <div className="text-center mb-6">
                <h5 className="text-3xl md:text-5xl font-screebie tracking-wider font-normal t-outline text-accent leading-tight mb-1">{title}</h5>
                <h6 className="text-white text-sm uppercase font-extrabold bg-dark-grey p-2">{subtitle}</h6>
            </div>

            {children}
        </div>
    );
};
