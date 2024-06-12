export const MooMooRoadmap = () => {

    return(
        <div className="flex justify-between relative">

            <div className="absolute top-1/2 -translate-y-1/2 h-1 bg-accent w-full -z-10"></div>

            <div className="rounded-full bg-dark-green text-white p-4 shrink-0 w-36 h-36 flex items-center flex-col justify-center">
                <strong className="font-extrabold text-lg">25%</strong>
                <h5 className="text-sm">ICO Announcement</h5>
            </div>

            <div className="rounded-full bg-dark-green text-white p-4 shrink-0 w-36 h-36 flex items-center flex-col justify-center">
                <strong className="font-extrabold text-lg">50%</strong>
                <h5 className="text-sm">Airdrop to Whitelist and Top Rarity NFT Holders</h5>
            </div>

            <div className="rounded-full bg-dark-green text-white p-4 shrink-0 w-36 h-36 flex items-center flex-col justify-center">
                <strong className="font-extrabold text-lg">75%</strong>
                <h5 className="text-sm">Airdrop Raffles</h5>
            </div>

            <div className="rounded-full bg-dark-green text-white p-4 shrink-0 w-36 h-36 flex items-center flex-col justify-center">
                <strong className="font-extrabold text-lg">100%</strong>
                <h5 className="text-sm">Listing on Exchanges</h5>
            </div>

        </div>
    );
};
