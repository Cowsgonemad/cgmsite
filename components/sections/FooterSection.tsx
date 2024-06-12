import { Logo } from '../ui';

export const FooterSection = ({ progress }: { progress: number }) => {

    const containerStyle = { top: `${100 - progress}%` };

    return (
        <footer className="h-screen max-h-screen w-full fixed overflow-hidden transition duration-20 bg-black flex flex-col border-t-4 border-black" style={containerStyle}>

            <div className="bg-halftone absolute size-full opacity-20 -z-10 mix-dodge"></div>

            <div className="bg-land h-80 shrink-0"></div>

            <div className="flex flex-col items-center px-4 w-full h-full">

                <div className="max-w-prose w-full mt-auto mb-8 flex items-center gap-8">

                    <div className="grayscale opacity-10">
                        <div className="w-48">
                            <Logo />
                        </div>
                    </div>

                    <p className="text-white text-justify w-full text-md opacity-40 font-thin">
                        The Cows Gone Mad ecosystem is an innovative project integrating an NFT collection, a utility token (MooMoo), a blockchain-based video game, and ultimately, the MetaHealth online platform.
                    </p>
                </div>
                <div className="max-w-prose w-full mb-auto">

                    <div className="relative">

                        <input type="text" className="w-full pl-8 pr-44 py-3 bg-transparent text-white text-sm border-2 border-white border-opacity-10 focus:outline-none focus:border-accent transition duration-20" placeholder="Your email" />

                        <button className="absolute w-40 right-0 font-extrabold uppercase h-full text-sm px-6 text-accent border-2 border-accent">Subscribe</button>
                    </div>
                </div>

                <hr className="border-t border-white opacity-10 w-full" />

                <div className="max-w-screen-lg opacity-40 py-4">
                    <p className="text-white font-thin text-sm">Cows Gone Mad &copy; All rights Reserved</p>
                </div>
            </div>

        </footer>
    );
};
