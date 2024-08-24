import { Screen } from "@/components/layout";
import { useState } from "react";

export const MetaHealthSection = () => {

    const [tab, setTab] = useState<number>(0);

    const active = "block 2xl:absolute opacity-100 translate-x-0 w-full transition duration-20";
    const inactive = "hidden 2xl:block lg:absolute opacity-0 2xl:translate-x-full w-full transition duration-20";

    return(
        <Screen id="meta-health" containerClasses="">
            <div className="w-full max-w-screen-xl mx-auto pt-24 pb-28 px-6">

                <div className="mb-8 text-center lg:text-left">
                    <h3 className="text-4xl xl:text-7xl font-outfit font-semibold">Ultimate Goal</h3>
                    <h4 className="text-2xl xl:text-4xl font-light text-dark-blue">MetaHealth Platform in Web3 Space</h4>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">

                    <div className="relative">

                        <ul className="grid grid-cols-2 gap-4 mb-12">
                            <li>
                                <button 
                                className={`${tab === 0 ? 'bg-dark-blue text-accent' : 'text-dark-blue'} px-4 py-2 uppercase font-bold w-full border-2 border-dark-blue rounded-xl transition duration-20`} 
                                onClick={() => setTab(0)}>About</button>
                            </li>
                            <li>
                                <button 
                                className={`${tab === 1 ? 'bg-dark-blue text-accent' : 'text-dark-blue'} px-4 py-2 uppercase font-bold w-full border-2 border-dark-blue rounded-xl transition duration-20`}
                                onClick={() => setTab(1)}>Features</button>
                            </li>
                        </ul>

                        <div className={tab === 0 ? active : inactive}>
                            <div className="text-lg 2xl:text-2xl font-light text-justify">
                                <p className="mb-4">Our vision is to develop a novel healthcare platform (MetaHealth) utilizing thirdspace concepts and technology. 
                                MetaHealth will not only advance healthcare access for patients worldwide, but also allow professionals to gain exposure to a wider global community. The mechanism will involve developing a smart phone app for the MetaHealth platform.</p>

                                <p>The possibility of MetaHealth as a future direction for CowsGoneMad ecosystem, outlined in the WP, further underscores our commitment to creating a long lasting and positive impact on both digital and healthcare landscapes.</p>
                            </div>
                        </div>

                        <div className={tab === 1 ? active : inactive}> 
                            <ul className="text-lg 2xl:text-2xl flex flex-col gap-4 font-light text-center">
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20">
                                    <span>Verified Specialists with proven records</span>
                                </li>
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20">
                                    <span>Services and Health Specialists Directory</span>
                                </li>
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20">
                                    <span>Blockchain-Secured Medical Records</span>
                                </li>
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20">
                                    <span>Digital Wallet and Payment Gateways</span>
                                </li>
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20">
                                    <span>Map of Services and Near-By Specialists</span>
                                </li>
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20">
                                    <span>Discounts, Offers and Exclusive Promotions</span>
                                </li>
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-dark-blue transition duration-20">
                                    <span>Review and Rating System</span>
                                </li>
                                <li className="py-3 px-8 rounded-full text-white font-extralight bg-accent transition duration-20">
                                    <span>Priority-Pass Appointment Scheduling</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="relative z-10 whitespace-nowrap">
                            <img  className="max-w-[50vw] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[350px] inline-block" src="/img/phone-sherief.png" alt="MetaHealth app directory" />
                            <img  className="max-w-[50vw] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[350px] inline-block -ml-20" src="/img/phone-ricardo.png" alt="MetaHealth app online consultation" />
                        </div>
                    </div>
                </div>

            </div>
        </Screen>
    );
};
