'use client'

import { ContractIcon, ExpandIcon } from '../../icons';
import { ResponsivePie } from '@nivo/pie'
import { useState } from 'react';

export const TokenomicsChart = () => {

    const [expand, setExpand] = useState(false);
    const [active, setActive] = useState<string | null>(null);

    const data: {id:string, label:string, value:number}[]  = [
        {
            id: "Locked for Liquidity and Burned",
            label: "Locked for Liquidity and Burned",
            value: 35
        },
        {
            id: "Private Pre-Sale",
            label: "Private Pre-Sale",
            value: 15
        },
        {
            id: "Public Pre-Sale",
            label: "Public Pre-Sale",
            value: 20
        },
        {
            id: "Founders & Team",
            label: "Founders & Team",
            value: 5
        },
        {
            id: "Development & Operations",
            label: "Development & Operations",
            value: 5
        },
        {
            id: "CEXs Listing",
            label: "CEXs Listing",
            value: 5
        },
        {
            id: "Advisors & Marketing",
            label: "Advisors & Marketing",
            value: 5
        },
        {
            id: "MetaHealth Platform Development",
            label: "MetaHealth Platform Development",
            value: 5
        },
        {
            id: "Video Game Development & Airdrop Rewards",
            label: "Video Game Development & Airdrop Rewards",
            value: 5
        },
    ];

    const colors = ['hsl(176, 72%, 60%)', 'hsl(180, 70%, 56%)', 'hsl(184, 68%, 52%)', 'hsl(188, 66%, 48%)', 'hsl(192, 64%, 44%)', 'hsl(196, 62%, 40%)', 'hsl(200, 60%, 36%)', 'hsl(204, 58%, 32%)', 'hsl(208, 55%, 24%)'];

    return(
        <div className={`py-4 rounded-lg relative transition duration-20 origin-bottom-left flex flex-col items-center ${expand && 'scale-160 bg-dark-blue'} ${!expand && 'bg-opacity-60'}`}>

            <div id="apex-pie-chart"
            style={{ height: 250+'px', width: 300+'px' }}>
                <ResponsivePie
                data={data}
                margin={{ top: 25, right: 10, bottom: 25, left: 10 }}
                activeOuterRadiusOffset={8}
                colors={colors}
                borderWidth={6}
                borderColor="#1b3f5e"
                valueFormat={e =>`${e}%`}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                enableArcLabels={false}
                activeId={active}
                onMouseEnter={(e) => setActive(e.id as string)}
                onMouseLeave={(e) => setActive(null)} />
            </div>

            <div className={expand ? 'text-white' : ''}>
                <ul className="font-light text-sm mt-2">
                    {data.map((d, i) => <li className={`inline-block mr-4 cursor-pointer ${active === d.id ? 'opacity-100' : 'opacity-70'}`} 
                    onClick={() => setActive(d.id)}>
                        <span style={{background: colors[i]}}
                        className={`inline-block h-3 w-3 rounded-full mr-1`}></span>{`${d.label} ${d.value}%`}
                    </li>)}
                </ul>
            </div>

            <div className="hidden lg:block absolute top-8 right-5 opacity-70 hover:opacity-100 transition duration-20">
                {!expand && <button onClick={() => setExpand(true)}>
                    <ExpandIcon fillVar="--accent" />
                </button>}
                
                {expand && <button onClick={() => setExpand(false)}>
                    <ContractIcon fillVar="--accent" />
                </button>}
            </div>
        </div>
    );
};
