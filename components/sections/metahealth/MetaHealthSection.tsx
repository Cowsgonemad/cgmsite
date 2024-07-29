import { Screen } from "@/components/layout";
import { useState } from "react";

export const MetaHealthSection = () => {

    const [expanded, setExpanded] = useState([false, false, false, false, false, false, false, false]);

    const update = (index: number) => {
        const current = [...expanded];
        current[index] = true;
        setExpanded([...current]);
    };

    const active = 'xl:translate-x-0 text-left';
    const inactive = 'xl:-translate-x-60';

    return(
        <Screen id="meta-health" containerClasses="">
            <div className="w-full max-w-screen-xl mx-auto py-28 px-6">

                <div className="text-center mb-8">
                    <h3 className="text-7xl font-outfit font-semibold">Ultimate Goal</h3>
                    <h4 className="text-4xl font-light">MetaHealth Platform in Web3 Space</h4>
                </div>

                <div className="text-2xl font-light text-justify">
                    <p className="mb-4">Our vision is to develop a novel healthcare platform (MetaHealth) utilizing thirdspace concepts and technology. 
                    MetaHealth will not only advance healthcare access for patients worldwide, but also allow professionals to gain exposure to a wider global community. The mechanism will involve developing a smart phone app for the metahealth platform.</p>

                    <p>The possibility of MetaHealth as a future direction for CowsGoneMad ecosystem, outlined in the WP, further underscores our commitment to creating a long lasting and positive impact on both digital and healthcare landscapes.</p>
                </div>

                <div className="grid xl:grid-cols-2 gap-8 mt-8 items-center">
                    
                    <div className="flex justify-center xl:justify-end">
                        <div className="relative xl:-mr-8 z-10 whitespace-nowrap">
                            <img className="max-w-[50vw] md:max-w-[250px] lg:max-w-[350px] inline-block" src="/img/phone-sherief.png" alt="MetaHealth app directory" />
                            <img className="max-w-[50vw] md:max-w-[250px] lg:max-w-[350px] inline-block -ml-20" src="/img/phone-ricardo.png" alt="MetaHealth app online consultation" />
                        </div>
                    </div>

                    <ul className="text-2xl flex flex-col gap-4 font-light text-center">
                        <li className={`py-3 px-8 xl:mr-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20  
                        ${expanded[0] ? active : inactive}`}
                        onMouseEnter={() => update(0)}><span className={`transition duration-20 ${expanded[0] ? 'opacity-100' : 'xl:opacity-0'}`}>Verified Specialists with proven records</span></li>
                        <li className={`py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20  
                        ${expanded[1] ? active : inactive}`}
                        onMouseEnter={() => update(1)}><span className={`transition duration-20 ${expanded[1] ? 'opacity-100' : 'xl:opacity-0'}`}>Services and Healdth Specialists Directory</span></li>
                        <li className={`py-3 px-8 xl:mr-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20  
                        ${expanded[2] ? active : inactive}`}
                        onMouseEnter={() => update(2)}><span className={`transition duration-20 ${expanded[2] ? 'opacity-100' : 'xl:opacity-0'}`}>Blockchain-Secured Medical Records</span></li>
                        <li className={`py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20  
                        ${expanded[3] ? active : inactive}`}
                        onMouseEnter={() => update(3)}><span className={`transition duration-20 ${expanded[3] ? 'opacity-100' : 'xl:opacity-0'}`}>Digital Wallet and Payment Gateways</span></li>
                        <li className={`py-3 px-8 xl:mr-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20  
                        ${expanded[4] ? active : inactive}`}
                        onMouseEnter={() => update(4)}><span className={`transition duration-20 ${expanded[4] ? 'opacity-100' : 'xl:opacity-0'}`}>Map of Services and Near-By Specialists</span></li>
                        <li className={`py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20  
                        ${expanded[5] ? active : inactive}`}
                        onMouseEnter={() => update(5)}><span className={`transition duration-20 ${expanded[5] ? 'opacity-100' : 'xl:opacity-0'}`}>Discounts, Offers and Exclusive Promotions</span></li>
                        <li className={`py-3 px-8 xl:mr-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20  
                        ${expanded[6] ? active : inactive}`}
                        onMouseEnter={() => update(6)}><span className={`transition duration-20 ${expanded[6] ? 'opacity-100' : 'xl:opacity-0'}`}>Review and Rating System</span></li>
                        <li className={`py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20  
                        ${expanded[7] ? active : inactive}`}
                        onMouseEnter={() => update(7)}><span className={`transition duration-20 ${expanded[7] ? 'opacity-100' : 'xl:opacity-0'}`}>Priority-Pass Appointment Scheduling</span></li>
                    </ul>
                </div>

            </div>
        </Screen>
    );
};
