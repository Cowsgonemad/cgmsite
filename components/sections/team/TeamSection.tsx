import { Screen } from "@/components/layout"
import { SectionTitle } from "@/components/ui";

export const TeamSection = () => {
    return(
        <Screen id="team" containerClasses="relative">

            <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5 -z-10"></div>

            <div className="w-full max-w-screen-xl mx-auto px-6 pt-28">
                
                <div className="flex flex-col items-center gap-8">
                    <img className="block w-56 h-auto" src="/img/cgm-logo.png" alt="Cows Gone Mad Logo" />
                    <SectionTitle classes="text-center" firstLine="FOUNDER'S" secondLine="Team" />
                </div>  
                
                <ul className="mt-8 mb-28 text-lg 2xl:text-xl font-light text-justify">
                    <li className="flex flex-col md:flex-row gap-4 items-start mb-4 bg-dark-green bg-opacity-30 rounded-5xl p-6">
                        <img className="w-24 h-24 lg:w-32 lg:h-32 object-cover object-top bg-white rounded-full block shrink-0 border-4 border-dark-blue" src="/img/Ricardo Persaud Sin Fondo.png" alt="Dr. Ricardo Persaud Portrait"/>
                        <div>
                            <h5 className="text-2xl font-extrabold leading-tight">Dr. Ricardo Persaud, FRCS.</h5>
                            <a className="text-lg font-normal text-dark-blue inline-block mb-2" href="https://ricardopersaud.com">ricardopersaud.com</a>
                            <p>
                            Renowned Doctor with 20 years ENT experience in the management of acute and chronic ENT conditions, performing over 10,000 surgical procedures. Chief Author of 8 books, Educator and Mentor. Consultant ENT Surgeon & Head of Dept., NMC Royal Hospital, Sharjah, UAE.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col md:flex-row gap-4 items-start mb-4 bg-dark-green bg-opacity-30 rounded-5xl p-6">
                        <img className="w-24 h-24 lg:w-32 lg:h-32 object-cover object-top bg-white rounded-full block shrink-0 border-4 border-dark-blue" src="/img/Sherief Elsayed Sin Fondo.png" alt="Dr. Sherief Elsayed Portrait"/>
                        <div>
                            <h5 className="text-2xl font-extrabold leading-tight">Dr. Sherief Elsayed, FRCS.</h5>
                            <a className="text-lg font-normal text-dark-blue inline-block mb-2" href="https://spinesurgeondubai.com">spinesurgeondubai.com</a>
                            <p>
                            Multi-award winning Spinal Surgeon and a prominent entrepreneur, researcher and Educator, having taught over 11,000 medical students to date. Consultant Spinal Surgeon, Dubai, UAE.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col md:flex-row gap-4 items-start mb-4 bg-dark-green bg-opacity-30 rounded-5xl p-6">
                        <img className="w-24 h-24 lg:w-32 lg:h-32 object-cover object-top bg-white rounded-full block shrink-0 border-4 border-dark-blue" src="/img/Gilberto Roman Sin Fondo.png" alt="Eng. Gilberto Roman Sin Fondo Portrait"/>
                        <div>
                            <h5 className="text-2xl font-extrabold leading-tight">Eng. Gilberto Roman</h5>
                            <a className="text-lg font-normal text-dark-blue inline-block mb-2" href="https://linkedin.com/in/gilbertoroman">linkedin.com/in/gilbertoroman</a>
                            <p>
                            Experienced Project Manager and Business Developer, creator of the most renowned Venezuelan NFT Project and Co-Founder of a top-tier Technology Development Start-Up. Certified Mechanical Engineer.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </Screen>
    );
};
