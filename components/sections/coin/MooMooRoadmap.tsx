export const MooMooRoadmap = () => {

    return(
        <div className="relative mt-6 mb-8">

            <div className="absolute w-full top-10 2xl:top-12 -z-10 grid">
                <div className="w-4/5 h-1 border-t-2 border-dashed border-white absolute left-1/2 -translate-x-1/2"></div>
            </div>

            <div className="flex justify-between gap-8 overflow-x-auto">
                <div className="w-1/3 sm:w-1/5 flex flex-col items-center shrink-0">
                    <strong className="font-extrabold text-xl text-dark-green rounded-full bg-[#7feae2] p-1 shrink-0 w-20 h-20 2xl:w-24 2xl:h-24 flex items-center justify-center">25%</strong>
                    <h5 className="text-base lg:text-md mt-2 text-black">Successful ICO</h5>
                </div>

                <div className="w-1/3 sm:w-1/5 flex flex-col items-center shrink-0">
                    <strong className="font-extrabold text-xl text-dark-green rounded-full bg-[#1790a0] p-1 shrink-0 w-20 h-20 2xl:w-24 2xl:h-24 flex items-center justify-center">50%</strong>
                    <h5 className="text-base lg:text-md mt-2 text-black">Leading project partnerships</h5>
                </div>

                <div className="w-1/3 sm:w-1/5 flex flex-col items-center shrink-0">
                    <strong className="font-extrabold text-xl text-accent rounded-full bg-[#1b3f5e] p-1 shrink-0 w-20 h-20 2xl:w-24 2xl:h-24 flex items-center justify-center">75%</strong>
                    <h5 className="text-base lg:text-md mt-2 text-black">Full game integration</h5>
                </div>

                <div className="w-1/3 sm:w-1/5 flex flex-col items-center shrink-0">
                    <strong className="font-extrabold text-xl text-accent rounded-full bg-[#112a3d] p-1 shrink-0 w-20 h-20 2xl:w-24 2xl:h-24 flex items-center justify-center">100%</strong>
                    <h5 className="text-base lg:text-md mt-2 text-black">CEX listings</h5>
                </div>
            </div>

        </div>
    );
};
