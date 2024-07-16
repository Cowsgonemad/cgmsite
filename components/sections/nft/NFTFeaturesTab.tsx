import { SectionTitle } from "@/components/ui";
import { NFTTab } from "./NFTTab";

export const NFTFeaturesTab = ({ isActive }: { isActive: boolean }) => {
    return(
        <NFTTab isActive={isActive}>
            <div className="text-black text-lg 2xl:text-2xl text-justify font-light my-auto xl:mb-0 lg:mb-auto">

                <SectionTitle firstLine="KEY" secondLine="Features" />

                <div className="my-16 relative">

                    <ul className="grid md:grid-cols-2 gap-8 pb-16">
                        <li className="border-2 border-dashed border-neutral-300 rounded-5xl bg-white bg-opacity-50 p-8">
                            <h5 className="font-extrabold text-2xl mb-1">Total Supply of 10,000 NFTs</h5>
                            <p>There will be no more future mints and, in case the selling goals are not achieved, the remaining supply will be burned to  guarantee and enable secondary market opportunities for the holders.</p>
                        </li>
                        <li className="border-2 border-dashed border-neutral-300 rounded-5xl bg-white bg-opacity-50 p-8">
                            <h5 className="font-extrabold text-2xl mb-1">Over 170 Unique Traits</h5>
                            <p>Each NFT features dynamic, hand-drawn art depicting one of the heroic cows, with over 170 unique traits across various categories such as clothes, hooves, accessories, and much more.</p>
                        </li>
                        <li className="border-2 border-dashed border-neutral-300 rounded-5xl bg-white bg-opacity-50 p-8">
                            <h5 className="font-extrabold text-2xl mb-1">0.25 SOL Mint Price</h5>
                            <p>NFTs will be available for Public Minting at an even price of 0.25 SOL, with future value driven by community involvement and utility within the upcoming utility token and video game.</p>
                        </li>
                        <li className="border-2 border-dashed border-neutral-300 rounded-5xl bg-white bg-opacity-50 p-8">
                            <h5 className="font-extrabold text-2xl mb-1">1,994 Exclusive Whitelist Spots</h5>
                            <p>To honour the early supporters, the minting for the first 1,994 Whitelist Spots will be rewarded with a 20% discount, meaning that each NFT will be purchased at 0.2 SOL.</p>
                        </li>
                    </ul>
                </div>
            </div>  

            {/* Key Aspects of the Project:

            Blockchain: Solana, chosen for its robust community, proven infrastructure and low fees.
            Art Collection: Each NFT features dynamic, hand-drawn art depicting one of the heroic cows, with over 170 unique traits across various categories such as clothes, hooves, accessories, and much more.

            Total Supply: 10,000 NFTs. 
            
            1,994 Whitelist spots, commemorating the year 1,994 when the link between Mad Cow Disease and its human equivalent was confirmed, underscoring the educational theme of the project.
            To earn a Whitelist spot, members must have and hold a given number of $MooMoo tokens.
            Immediately after the Whitelist pre-sale is completed, a Public-Sale will be released for the remaining NFTs to complete the collection.
            Limited airdrops of NFT’s to top-bracket token holders.
            There will be no more future mints and, in case the selling goals are not achieved, the remaining supply will be burned to guarantee and enable secondary market opportunities for the holders.

            Pricing: To honour the early supporters, the minting for the first 1,994 Whitelist Spots will be rewarded with a 20% discount, meaning that each NFT will be purchased at 0.2 SOL. The remaining NFTs will be available for Public Minting at an even price of 0.25 SOL, with future value driven by community involvement and utility within the upcoming utility token and video game.

            Non-Revealed and random NFTs: The NFTs will be revealed in batches through special events for the community, avoiding potential trait sniping. Also, each time a holder mints an NFT the collection will be sorted using a “Deterministic Number” script based on the hash of the last block added to the Solana blockchain, this ensures that each holder is minting a completely random NFT from the supply, and nobody, including the project’s Founders and developers, can’t have privileged access to rare NFTs. */}

        </NFTTab>
    );
};
