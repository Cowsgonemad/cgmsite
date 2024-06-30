import { SubscribeArrowIcon } from '../../icons';
import { CGMLogo, FooterCow, MooMooLogo, RefLogo, SocialBar } from '.';

export const FooterSection = () => {

    // const containerStyle = { top: `${100 - progress}%` };

    return (
        <footer id="footer" className="w-full bg-footer border-t-4 border-black flex flex-col pt-14" 
        style={{}}>

            {/* <div className="bg-land h-28 2xl:h-52 shrink-0 hidden md:block"></div> */}

            <div className="flex w-full max-w-screen-md justify-center items-center mx-auto md:mt-auto gap-4 lg:gap-8 mb-4 pt-8 md:pt-0">
                <div className="w-1/6">
                    <MooMooLogo />
                </div>
                
                <div className="w-1/4">
                    <CGMLogo />
                </div>

                <div className="w-1/5">
                    <RefLogo />
                </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex items-center md:items-end md:px-16 px-6 w-full justify-between mt-4">

                <div className="md:w-1/2 lg:w-2/5 text-white order-2 md:order-1 mr-auto md:mr-0">

                    <ul className="link-list pl-4">
                        <li className="mb-4">
                            <a href="">Moo Moo Papers</a>
                        </li>
                        <li className="mb-4">
                            <a href="">Legal</a>
                        </li>
                    </ul>

                    <p className="text-dark-green-light 2xl:mt-16 mt-4 text-sm mb-4">
                        <a href="">TERMS OF SERVICE</a>
                        <span className="inline-block rounded-full w-1 h-1 bg-dark-green-light my-1 mx-2"></span>
                        <a href="">PRIVACY POLICY</a>
                    </p>
                    
                </div>

                <div className="w-1/5 justify-center order-3 md:order-2 hidden lg:flex">
                    <FooterCow />
                </div>

                <div className="md:w-1/2 lg:w-2/5 2xl:pl-40 order-1 md:order-3 mb-4 md:mb-0">
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

            </div>

            <div className="w-full bg-dark-green-light mt-auto md:mt-0">
                <div className="max-w-screen-lg opacity-40 py-2 text-center mx-auto">
                    <p className="text-white font-extralight text-sm">Cows Gone Mad &copy; All rights Reserved</p>
                </div>
            </div>

        </footer>
    );
};
