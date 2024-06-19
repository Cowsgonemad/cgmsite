import { SubscribeArrowIcon } from '../icons';
import { SocialBar } from '../layout';
import { CGMLogo, FooterCow, FooterInput, Logo, MooMooLogo, RefLogo } from '../ui';

export const FooterSection = ({ progress }: { progress: number }) => {

    const containerStyle = { top: `${100 - progress}%` };

    return (
        <footer className="h-screen max-h-screen w-full fixed overflow-hidden bg-footer flex flex-col border-t-4 border-black" style={containerStyle}>

            {/* <div className="bg-halftone absolute size-full opacity-20 -z-10 mix-dodge"></div> */}

            <div className="bg-land h-60 shrink-0"></div>

            <div className="flex w-full max-w-screen-md justify-center items-center m-auto">
                <div className="w-1/3 p-14">
                    <MooMooLogo />
                </div>
                
                <div className="w-1/3">
                    <CGMLogo />
                </div>

                <div className="w-1/3 p-8">
                    <RefLogo />
                </div>
            </div>

            <div className="flex items-end px-16 w-full justify-between">

                <div className="w-1/3 text-white">

                    <ul className="link-list pl-4">
                        <li className="mb-4">
                            <a href="">Moo Moo Papers</a>
                        </li>
                        <li className="mb-4">
                            <a href="">Legal</a>
                        </li>
                    </ul>

                    <p className="text-dark-green-light mt-16 text-sm mb-4">
                        <a href="">TERMS OF SERVICE</a>
                        <div className="inline-block rounded-full w-1 h-1 bg-dark-green-light my-1 mx-2"></div>
                        <a href="">PRIVACY POLICY</a>
                    </p>
                    
                </div>

                <div className="w-1/3 text-center">
                    <FooterCow />
                </div>

                <div className="w-1/3 pl-32">
                    <p className="text-white text-justify w-full text-md opacity-40 font-extralight mb-8">
                        The Cows Gone Mad ecosystem is an innovative project integrating an NFT collection, a utility token (MooMoo), a blockchain-based video game, and ultimately, the MetaHealth online platform.
                    </p>

                    <div className="relative">

                        <label htmlFor="subscribe" className="absolute font-extrabold text-accent -top-6 right-8">
                            Subscribe
                        </label>

                        <div className="absolute -top-2 -left-2 -z-10 w-6 h-4 border-t border-l border-t-accent border-l-accent"></div>
                        <div className="absolute -bottom-2 -left-2 -z-10 w-6 h-4 border-b border-l border-b-accent border-l-accent"></div>
                        <div className="absolute -top-2 -right-2 -z-10 w-6 h-4 border-t border-r border-t-accent border-r-accent"></div>
                        <div className="absolute -bottom-2 -right-2 -z-10 w-6 h-4 border-b border-r border-b-accent border-r-accent"></div>
                        
                        <input type="text" id="subscribe"
                        className="w-full pl-8 pr-24 py-3 bg-accent bg-opacity-20 text-white text-sm border border-accent transition duration-20"
                        placeholder="Your email" />

                        <button className="absolute right-4 top-3">
                            <SubscribeArrowIcon />
                        </button>
                    </div>

                    <SocialBar />
                </div>

                {/* <div className="max-w-prose w-full mt-auto mb-8 flex items-center gap-8">

                    <div className="grayscale opacity-10">
                        <div className="w-48">
                            <Logo />
                        </div>
                    </div>

                    <p className="text-white text-justify w-full text-md opacity-40 font-extralight">
                        The Cows Gone Mad ecosystem is an innovative project integrating an NFT collection, a utility token (MooMoo), a blockchain-based video game, and ultimately, the MetaHealth online platform.
                    </p>
                </div>
                <div className="max-w-prose w-full mb-auto">

                    <div className="relative">

                        <input type="text" className="w-full pl-8 pr-44 py-3 bg-transparent text-white text-sm border-2 border-white border-opacity-10 focus:outline-none focus:border-accent transition duration-20" placeholder="Your email" />

                        <button className="absolute w-40 right-0 font-extrabold uppercase h-full text-sm px-6 text-accent border-2 border-accent">Subscribe</button>
                    </div>
                </div> */}

            </div>

            <div className="w-full bg-dark-green-light">
                <div className="max-w-screen-lg opacity-40 py-2 text-center mx-auto">
                    <p className="text-white font-extralight text-sm">Cows Gone Mad &copy; All rights Reserved</p>
                </div>
            </div>

        </footer>
    );
};
