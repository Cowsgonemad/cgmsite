import { useRef } from 'react';
import { Screen } from '../../layout';
import { SectionTitle } from '@/components/ui';
import { RoadmapElement } from './RoadmapElement';

export const RoadmapSection = () => {

    return(
        <Screen id="roadmap" containerClasses="bg-halftone">

            <div className="min-h-screen w-full flex flex-col items-center justify-center relative pt-28 pb-28 px-6">

                <div className="absolute top-0 left-0 size-full bg-roadmap"></div>

                <div className="flex mt-auto items-center justify-center gap-8 relative">
                    <SectionTitle classes="text-center mt-auto" firstLine="Road" secondLine="MAP" />
                </div>

                <div className="transparent-scroller w-full lg:max-w-2xl 2xl:max-w-4xl flex overflow-x-auto mt-8 mb-auto gap-1/50 relative pb-4 text-lg">

                    <RoadmapElement title="Q3 2024" subtitle="JUL - AUG 2024">
                        <ul className="list-disc list-outside pl-6">
                            <li>Build All Project Assets and Launch Community Telegram.</li>
                            <li>Launch website.</li>
                            <li>Launch Project Twitter (Revamped).</li>
                            <li>Kick Off Project Marketing.</li>
                        </ul>
                    </RoadmapElement>
                    <RoadmapElement title="Q3 - Q4 2024" subtitle="AUG - DEC 2024">
                        <ul className="list-disc list-outside pl-6">
                            <li>KOL Partnerships.</li>
                            <li>Token ICO (September 10th, 2024).</li>
                            <li>Launch Game Beta for Holders.</li>
                        </ul>
                    </RoadmapElement>
                    <RoadmapElement title="Q4 2024" subtitle="OCT - DEC 2024">
                        <ul className="list-disc list-outside pl-6">
                            <li>Announce and Reveal NFT Collection.</li>
                            <li>First CEX Listing for Token.</li>
                            <li>Begin Marketing for NFT Launch.</li>
                            <li>Token Holder Snapshot for NFT Airdrop.</li>
                            <li>Launch NFT Collection.</li>
                        </ul>
                    </RoadmapElement>
                    <RoadmapElement title="Q1 2025" subtitle="JAN - MAR 2025">
                        <ul className="list-disc list-outside pl-6">
                            <li>Begin Development on Full Game Launch.</li>
                            <li>Provide Community with Step-by-Step Updates on Game Completion.</li>
                        </ul>
                    </RoadmapElement>
                    <RoadmapElement title="Q2 - Q3 2025" subtitle="APR - SEP 2025">
                        <ul className="list-disc list-outside pl-6">
                            <li>Launch Full Game.</li>
                            <li>Begin Development on Meta Health Platform.</li>
                        </ul>
                    </RoadmapElement>
                    <RoadmapElement title="Q4 2025" subtitle="OCT - DEC 2025">
                        <ul className="list-disc list-outside pl-6">
                            <li>Host First Patient on Meta Health Platform.</li>
                            <li>Public Launch of Meta Health Platform.</li>
                        </ul>
                    </RoadmapElement>

                </div>
            </div>
            
        </Screen>
    );
};
