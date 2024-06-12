'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const TokenomicsChart = () => {

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
        <>
            <ApexChart type="pie" options={options} series={series} height={160} width={400} />
        </>
    );
};
