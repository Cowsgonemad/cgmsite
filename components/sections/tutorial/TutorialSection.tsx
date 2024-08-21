import { Screen } from "@/components/layout";
import { Lightbox } from "@/components/ui";
import { useEffect, useState } from "react";

export const TutorialSection = () => {

    const [lightbox, setLightbox] = useState({open: false, initial: 0});

    const list = [
        {src: '/img/INFO-WEB-1.jpg', alt: 'Phantom Wallet instructions'},
        {src: '/img/INFO-WEB-2.jpg', alt: 'Raydium instructions'},
        {src: '/img/INFO-WEB-3.jpg', alt: 'Final step'},
    ];

    useEffect(() => {
        if (lightbox.open) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [lightbox]);

    return(
        <Screen id="tutorial" containerClasses="bg-halftone">
            <div className="w-full max-w-screen-xl mx-auto py-28 px-6 relative">
                
                <div className="absolute size-full bg-coin animate-bg-size top-0 left-0 opacity-5"></div>

                <div className="relative bg-white bg-opacity-60 p-6 rounded-2xl mb-8">

                    <h3 className="text-dark-blue mb-10 text-2xl lg:text-3xl font-outfit font-extrabold text-center">
                        Setting up and Buying MooMoo Tokens
                    </h3>

                    <ul className="grid lg:grid-cols-3 gap-8">
                        <li className="text-lg xl:text-xl font-light">
                            <p className="mb-8">
                                <strong className="font-extrabold text-dark-blue mr-2">1.</strong>
                                Set up your <strong className="font-extrabold">Phantom Wallet</strong> at <a className="text-dark-blue" href="https://phantom.app">https://phantom.app</a>.
                            </p>
                            <button onClick={() => setLightbox({...lightbox, open: true, initial: 0})}>
                                <img src="/img/INFO-WEB-1.jpg" className="h-72 w-full object-cover rounded-3xl cursor-pointer opacity-60 hover:opacity-100" />
                            </button>
                        </li>
                        <li className="text-lg xl:text-xl font-light">
                            <p className="mb-8">
                                <strong className="font-extrabold text-dark-blue mr-2">2.</strong>
                                Connect yout <strong className="font-extrabold">Phantom Wallet</strong> to <strong className="font-extrabold">Raydium</strong> at <a className="text-dark-blue" href="https://phantom.app">https://raydium.io</a>.
                            </p>
                            <button onClick={() => setLightbox({...lightbox, open: true, initial: 1})}>
                                <img src="/img/INFO-WEB-2.jpg" className="h-72 w-full object-cover rounded-3xl cursor-pointer opacity-60 hover:opacity-100" />
                            </button>
                        </li>
                        <li className="text-lg xl:text-xl font-light">
                            <p className="mb-8">
                                <strong className="font-extrabold text-dark-blue mr-2">3.</strong>
                                Any transaction you make will automatically sync across devices. 
                            </p>
                            <button onClick={() => setLightbox({...lightbox, open: true, initial: 2})}>
                                <img src="/img/INFO-WEB-3.jpg" className="h-72 w-full object-cover rounded-3xl cursor-pointer opacity-60 hover:opacity-100" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="relative bg-white bg-opacity-60 p-6 rounded-2xl">
                    <p className="text-lg xl:text-xl font-light">Download pdf infograph <a href="/docs/infograph.pdf" target="_blank" className="text-dark-blue">here</a>.</p>
                </div>

            </div>

            {lightbox.open &&
            
            <Lightbox 
            list={list} 
            open={true} 
            initial={lightbox.initial} 
            close={() => setLightbox({...lightbox, open: false})} />}

        </Screen>
    );
};
