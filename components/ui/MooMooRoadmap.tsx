export const MooMooRoadmap = () => {

    return(
        <div className="flex justify-between relative">

            <div className="absolute top-12 -z-10 w-full">
                <div className="w-4/5 mx-auto h-1 border-t-2 border-dashed border-dark-green"></div>
            </div>

            <div className="w-36 flex flex-col items-center">
                <strong className="font-extrabold text-xl text-dark-green rounded-full bg-[#7feae2] p-4 shrink-0 w-24 h-24 flex items-center justify-center">25%</strong>
                <h5 className="text-md mt-2">ICO Announcement</h5>
            </div>

            <div className="w-36 flex flex-col items-center">
                <strong className="font-extrabold text-xl text-dark-green rounded-full bg-[#1790a0] p-4 shrink-0 w-24 h-24 flex items-center justify-center">50%</strong>
                <h5 className="text-md mt-2">Airdrop to Whitelist and Top Rarity NFT Holders</h5>
            </div>

            <div className="w-36 flex flex-col items-center">
                <strong className="font-extrabold text-xl text-accent rounded-full bg-[#1b3f5e] p-4 shrink-0 w-24 h-24 flex items-center justify-center">75%</strong>
                <h5 className="text-md mt-2">Airdrop Raffles</h5>
            </div>

            <div className="w-36 flex flex-col items-center">
                <strong className="font-extrabold text-xl text-accent rounded-full bg-[#112a3d] p-4 shrink-0 w-24 h-24 flex items-center justify-center">100%</strong>
                <h5 className="text-md mt-2">Listing on Exchanges</h5>
            </div>

        </div>
    );
};
