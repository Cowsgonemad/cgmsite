export const SectionTitle = ({ 
    firstLine, 
    secondLine 
}: { 
    firstLine: string, 
    secondLine: string 
}) => {

    return(
        <div className="w-full text-center mt-auto">
            <h3 className="text-pink text-6xl lg:text-8xl title-drop-shadow">
                {firstLine}
                <span className="text-white text-4xl lg:text-6xl font-jester block -mt-4 lg:-mt-6">{secondLine}</span>
            </h3>
        </div>
    );
};
