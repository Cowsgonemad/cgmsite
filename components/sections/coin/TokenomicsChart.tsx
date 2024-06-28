'use client'

import dynamic from "next/dynamic";
import { ContractIcon, ExpandIcon } from '../../icons';
import { useState } from 'react';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const TokenomicsChart = () => {

    const [expand, setExpand] = useState(false);

    const options: ApexCharts.ApexOptions = {
        labels: ['Founder\'s Share', 'Video Game', 'Operations', 'Holder\'s Airdrop', 'Marketing', 'Public Sale and ICO'],
        theme: {
            monochrome: {
                enabled: true,
                color: '#7feae2',
                shadeTo: 'dark',
                shadeIntensity: 0.65
            }
        },
        stroke: {
            width: 5,
            colors: ['#02353c'],
            lineCap: 'round'
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            y: {
                formatter: (val) => `${val}%`
            }
        }
    };

    const series = [10, 15, 5, 10, 10, 50];

    return(
        <div className={`py-4 rounded-lg relative transition duration-20 origin-bottom-left ${expand && 'scale-200 bg-dark-blue'} ${!expand && 'bg-opacity-60'}`}>

            <ApexChart type="pie" options={options} series={series} height={190} width={400} />

            <div className="absolute top-8 right-5 opacity-70 hover:opacity-100 transition duration-20">
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
