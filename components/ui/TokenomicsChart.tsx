'use client'

import dynamic from "next/dynamic";
import { ContractIcon, ExpandIcon } from '../icons';
import { useState } from 'react';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const TokenomicsChart = () => {

    const [expand, setExpand] = useState(false);

    const options: ApexCharts.ApexOptions = {
        labels: ['Founder\'s Share', 'Video Game', 'Operations', 'Holder\'s Airdrop', 'Marketing', 'Public Sale and ICO'],
        theme: {
            monochrome: {
                enabled: true,
                color: '#02353c',
                shadeTo: 'light',
                shadeIntensity: 0.45
            }
        },
        stroke: {
            show: false
        },
    };

    const series = [10, 15, 5, 10, 10, 50];

    return(
        <div className={`bg-black py-4 rounded-lg relative transition duration-20 origin-bottom-left ${expand && 'scale-200  bg-opacity-100'} ${!expand && 'bg-opacity-60'}`}>

            <ApexChart type="pie" options={options} series={series} height={160} width={400} />

            <div className="absolute top-2 left-2 opacity-70 hover:opacity-100 transition duration-20">
                {!expand && <button onClick={() => setExpand(true)}>
                    <ExpandIcon fillVar="--white" />
                </button>}
                
                {expand && <button onClick={() => setExpand(false)}>
                    <ContractIcon fillVar="--white" />
                </button>}
            </div>
        </div>
    );
};
