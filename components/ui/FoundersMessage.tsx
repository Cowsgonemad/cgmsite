import { useEffect, useState } from "react";
import { CloseIcon } from "../icons";

export const FoundersMessage = () => {

    const [render, setRender] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setRender(true);
        setTimeout(() => {
            setShow(true);
        }, 10);
    }, []);

    const handleDismiss = () => {
        setShow(false);
        setTimeout(() => {
            setRender(false);
        }, 200);
    }

    return(
        <>
            {render && <div onClick={handleDismiss} 
            className="fixed top-0 left-0 size-full flex items-center justify-center p-2 py-6 z-40 transition duration-20" style={{ opacity: show ? '1' : '0' }}>

                <div onClick={(e) => e.stopPropagation()} 
                style={{ transform: show ? 'translateY(0)' : 'translateY(100px)' }}
                className="rounded-lg relative transition duration-20 size-full bg-white max-w-prose overflow-hidden">

                    <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5 -z-10"></div>

                    <button title="Dismiss" 
                    className="absolute right-2 prose:-right-14 top-2 prose:top-0 rounded-full bg-black p-1 cursor-pointer z-20" 
                    onClick={handleDismiss}><CloseIcon fill={'white'} /></button>

                    <div className="overflow-auto size-full p-6">

                        <img src="/img/cgm-logo.png" className="w-1/2 mb-8 mx-auto" />
                        
                        <h2 className="text-5xl text-dark-blue mb-2 font-bold text-center">Moo&apos;s 1st Year Anniversary</h2>
                        <h2 className="text-2xl mb-8 text-center">A Message to Our Herd: One Year of Going Mad Together</h2>
                        <h4 className="text-xl mb-4 font-bold">From the Founder&apos;s Heart</h4>

                        <p className="mb-4">Exactly one year ago, I had an eccentric but challenging idea.  What if I could build something unique in the crypto/Web3 space?  Something that delivers seriously good results for the benefits worldwide  Something that celebrate the beautiful madness of this space, while creating real value for people who believe in my vision. Voila, the birth of MooMoo/CowsGoneMad (CGM).</p>

                        <p className="mb-4">Today, looking at what my triple AAA team and I have built together from scratch, I am not just proud - I am genuinely emotional about the new and innovative Web3 ecosystem blending Health, Gaming, NFT and Decentralised Finance. All of this would not have been possible without you and the significant inputs from many core team members, notably: Dr Sherief, Joshua, Gilberto, Ralph, Dory, Dravo and Adam, all of whom sacrificed time, money and effort to ensure the success we have had so far with the project.  </p>

                        <p className="mb-4">The number tells one story: MOO has weathered every storm this brutal market threw at it. People in this space know 98 percent of  all Web3/crypto projects die within the first 6-9 months.  MOO/CGM survived because we&apos;ve built a community that doesn&apos;t just HODL - they engage, they create, they TRUST, they believe in a Doxxed Doctor Developer.</p>

                        <p className="mb-4">But the real beauty is in the relationships. The late night conversations on What&apos;s app, Social Media and Zoom meetings.  The memes that made us all laugh during red days. The way complete strangers became genuine friends because they all went “mad” for the same vision.  MOO is not just a token - it is about proving that crypto can be fun, rewarding, community building and sustainable.</p>

                        <p className="mb-4">But here is the thing: we are just getting started. What is coming next builds on the solid foundation.  On 24th September 2025, we are minting our exclusive CGM NFT collection on Cronos blockchain, thanks to Dory and his strong connections with one of the top global exchanges Crypto.com.  The NFTs aren&apos;t just fantastic hand made digital art pieces; they are designed with special gaming utility in mind, offering real value to holders within CGM ecosystem.  Our very own world-class blockchain-integrated video game, CowsGoneMad Battle for Pasture Prime, is currently in the Alpha stage - thanks to Alejandro, Dory, Gilberto and Joshua.  Moreover, the Beta version is already in the works, alongside exciting collaborations with other renowned Web3 projections.  We are currently in active discussions with several potential partners and collaborators who share our vision for sustainable community growth. Whilst I cannot promise on the outcomes, I can say the conversations are encouraging and could open new doors for our community.</p>

                        <p className="mb-4">In Q4 2025, we are working on expanding $MOO utility beyond what most expect from community-driven tokens.  Our development roadmap focuses on sustainable growth and real value creation for people worldwide.  We are proud of the significant progress made  in the development of an Ai-assisted MetaHealth CliniQ app, reaching the minimal viable product (MVP) stage - thanks to the great leadership and tremendous efforts of Dr Sherief  Elsayed FRCS.  Soon you will have a doctor and an ambient Ai scribe in your pocket, which can be used anytime, anywhere.</p>

                        <p className="mb-4">
                            To everyone who found us early and stayed through the 12 month journey
                            You didn&apos;t just buy a token.  You joined a movement. You became part of something built on genuine community engagement, transparent development and honest communication.
                        </p>

                        <p className="mb-4">
                            To everyone discovering us now.
                            You are joining a project that focuses on steady building, rather than empty pseudo-hype.  We believe in under-promising and over-delivering, because sustainable growth beats quick pumps every time.
                        </p> 

                        <p className="mb-4">
                            The crypto world is full of projects that promise loads to its community but deliver nothing.
                            We promise madness and deliver a family who believe in the vision of the Founder.
                        </p>

                        <p className="mb-4">
                            The crypto world is full of projects that promise utility but deliver hot air.
                            We promise fun and built real engagement tools.
                        </p>

                        <p className="mb-4">
                            The crypto world is full of projects that promise the moon but crash to earth.
                            We promise to build something that last and we are proving it everyday.
                        </p>

                        <p className="mb-4">Finally, I will leave you with this. Success in crypto/Web3 space isn&apos;t measured just by price pumps - it is measured by community strength, consistent development and the TRUST you place in the TEAM to keep building steadily.  Our unique NFT collection drops in 10 days - our first major utility expansion globally.  Furthermore, the potential partnerships that are developing and the future we are building are based on sustainable fundamentals.</p>

                        <p className="mb-4">Stay focus, stay mad, stay engaged, and stay realistic about the journey ahead.  Because the strongest community are built on TRUST, not hype.  Further details on all components on our ecosystem will be shared as soon as we finalize our plans to ensure that we can deliver on every promise.</p> 

                        <p className="mb-4">Before closing, I would like to acknowledge the excellent constructive contributions to CGM ecosystem by veteran Web3 advisor, Mr Adrian Niculescu MBA, especially with regards to the proposed strategic plan to empower the value and visibility of MOO token.  This involves a systematic buy back mechanism and a comprehensive Asian campaign (China vpn users, Japan, South Korea, Malaysia & Singapore)  to enhance widespread adoption not only for MOO token, but also the entire CGM ecosystem.  The future is bright, the future is MOO/CGM/CliniQ symbiosis.</p>

                        <p className="mb-4">
                            Remember No Risks No MOOlah!
                            Happy 1st Birthday to MooMoo ($MOO) and may your day be filled with a God-like green Candle Cake :))
                        </p>

                        <p className="mb-4">
                            With sincere gratitude for your continued support and steady determination,
                            Yours sincerely,
                        </p>

                        <div className="mb-4">
                            Dr Ricardo A. P. Persaud FRCS (ORL-HNS)
                            <br />
                            Founder, CowsGoneMad (Cowsgonemad.io)
                            <br />
                            Consultant ENT Surgeon & HOD, UAE.
                            <br />
                            14th September 2025
                        </div>

                        <div>
                            PS Join us for honest conversation and updates on telegram and twitter accounts
                            <br />
                            @cgmarmy on TG
                            <br />
                            @cowsgonemad on X
                            <br />
                            @moomoohub on X
                        </div>

                    </div>

                </div>
                
            </div>}
        </>
    );
};