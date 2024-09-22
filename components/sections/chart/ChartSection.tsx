import { Screen } from "@/components/layout";
import { SectionTitle } from "@/components/ui";

export const ChartSection = () => {

    return(
        <Screen id="chart" containerClasses="relative">

            <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5 -z-10"></div>

            <div className="pt-28 px-6 text-center mb-16">
                <SectionTitle firstLine="MooMoo" secondLine="Analytics" />
            </div>

            <div className="px-6 pb-28 w-full max-w-screen-xl mx-auto">
                <iframe className="w-full h-screen-75 border border-black rounded-xl" 
                loading="lazy" id="dextools-widget"
                title="DEXTools Trading Chart"
                width="500" height="400"
                src="https://www.dextools.io/widget-chart/en/solana/pe-light/3hA61x61bks9Y81wnX54KwBPTbRuHGLBQPX6Z8A7Fh71?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"></iframe>
            </div>
        </Screen>
    )
};
