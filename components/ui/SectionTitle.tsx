export const SectionTitle = ({ 
    firstLine, 
    secondLine,
    classes 
}: { 
    firstLine: string, 
    secondLine: string,
    classes?: string
}) => {

    return(
        <div className={classes ? classes : 'w-full text-center mt-auto'}>
            <h3 className="text-pink text-6xl lg:text-7xl tracking-wider t-outline">
                {firstLine}
                <span className="text-black text-5xl lg:text-6xl font-jester block -mt-4 lg:-mt-6 tracking-normal no-outline">{secondLine}</span>
            </h3>
        </div>
    );
};
