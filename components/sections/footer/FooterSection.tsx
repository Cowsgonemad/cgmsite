import { CGMLogo, EmailForm, FooterCow, MooMooLogo, SocialBar } from '.';

export const FooterSection = () => {

    return (
        <footer id="footer" className="w-full bg-footer border-t-4 border-black flex flex-col pt-14">

            <div className="flex w-full max-w-screen-md justify-center items-center mx-auto md:mt-auto gap-4 lg:gap-8 mb-4 pt-8 md:pt-0">
                <div className="w-1/6">
                    <MooMooLogo />
                </div>
                
                <div className="w-1/4">
                    <CGMLogo />
                </div>

                <div className="w-1/5">
                    <img src="/img/CGM-BFTPP-FOOTER.png" alt="Battle For Pasture Prime Logo White" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex items-center md:items-end md:px-16 px-6 w-full justify-between mt-4">

                <div className="md:w-1/2 lg:w-2/5 text-white order-2 md:order-1 mr-auto md:mr-0">

                    <h5 className="mb-4">Moo Press</h5>
                    <ul className="link-list pl-6 mb-8">
                        <li className="mb-4">
                            <a href="https://www.streetinsider.com/Press+Releases/Dubai-based+Doctors+Unveil+a+Novel+Web+3+Ecosystem+-+Cows+Gone+Mad+-+Powered+by+MooMoo+%28%24MOO%29+Token+on+the+Solana+Blockchain/23581683.html">Street Insider</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://apnews.com/press-release/marketersmedia/medical-technology-animals-virtual-and-augmented-reality-042106b2ba5a596d3993051355c898bf">AP News</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://pr.newsmax.com/article/Dubai-based-Doctors-Unveil-a-Novel-Web-3-Ecosystem-Cows-Gone-Mad-Powered-by-MooMoo-dollarMOO-Token-on-the-Solana-Blockchain?storyId=66b7b1431534160008c75e28">Newsmax</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.digitaljournal.com/pr/news/vehement-media/dubai-based-doctors-unveil-novel-web-1973117530.html">Digital Journal</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.benzinga.com/content/40302370/dubai-based-doctors-unveil-a-novel-web-3-ecosystem-cows-gone-mad-powered-by-moomoo-moo-token-on-the">Benzinga</a>
                        </li>
                    </ul>

                    <ul className="link-list pl-4 hidden">
                        <li className="mb-4">
                            <a href="">Moo Papers</a>
                        </li>
                        <li className="mb-4">
                            <a href="">Legal</a>
                        </li>
                    </ul>

                    <p className="text-dark-green-light 2xl:mt-16 mt-4 text-sm mb-4 hidden">
                        <a href="">TERMS OF SERVICE</a>
                        <span className="inline-block rounded-full w-1 h-1 bg-dark-green-light my-1 mx-2"></span>
                        <a href="">PRIVACY POLICY</a>
                    </p>
                    
                </div>

                <div className="w-1/5 justify-center order-3 md:order-2 hidden lg:flex">
                    <FooterCow />
                </div>

                <div className="md:w-1/2 lg:w-2/5 2xl:pl-40 order-1 md:order-3 mb-4 md:mb-0">
                    <p className="text-white text-justify w-full text-md font-extralight mb-8">
                        The Cows Gone Mad ecosystem is an innovative project integrating an NFT collection, a utility token (Moo), a blockchain-based video game, and ultimately, the MetaHealth online platform.
                    </p>

                    <EmailForm />

                    <SocialBar />
                </div>

            </div>

            <div className="w-full bg-dark-green-light mt-auto md:mt-0">
                <div className="max-w-screen-lg py-2 text-center mx-auto">
                    <p className="text-white font-extralight text-sm">Cows Gone Mad &copy; All rights Reserved</p>
                </div>
            </div>

        </footer>
    );
};
