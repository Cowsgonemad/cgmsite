'use client'

import dynamic from "next/dynamic";
import { ContractIcon, ExpandIcon } from '../../icons';
import { useState } from 'react';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const TokenomicsChart = () => {

    const [expand, setExpand] = useState(false);

    const options: ApexCharts.ApexOptions = {
        labels: ['Locked for Liquidity and Burned', 'Founders & Team', 'Advisors & Marketing', 'Dev. & Operations', 'Video Game Dev.', 'Development of the MetaHealth Platform', 'Private Pre-Sale'],
        theme: {
            monochrome: {
                enabled: true,
                color: '#7feae2',
                shadeTo: 'dark',
                shadeIntensity: .75
            }
            
        },
        // colors: ['#7feae2', '#fff', '#1790a0', '#02353c', '#112a3d', '#3fd0c9'],
        stroke: {
            width: 5,
            colors: ['#1b3f5e'],
            lineCap: 'round'
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            y: {
                formatter: (val) => `${val}%`
            }
        },
        legend: {
            width: 220,
            height: 220,
            fontSize: '14px',
            fontWeight: 200,
            
            labels: {
                colors: 'white',
            },
            formatter: ((name, opt) => `${name} ${opt.w.globals.series[opt.seriesIndex]}%`)
        }
    };

    const series = [70, 5, 2, 3, 5, 5, 10];

    return(
        <div className={`py-4 rounded-lg relative transition duration-20 origin-bottom-left ${expand && 'scale-200 bg-dark-blue'} ${!expand && 'bg-opacity-60'}`}>

            <div id="apex-pie-chart">
                <ApexChart type="pie" options={options} series={series} height="160px" width="400px" />
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
