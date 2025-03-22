import { DiscordIcon, InstagramIcon, TelegramIcon, UbreIcon, XIcon } from '../../icons';

export const SocialBar = () => {

    return(
        <ul className="opacity-50 flex gap-6 mt-3 mb-6 justify-center">
            <li className="mr-auto">
                <a href="/docs/v1.6.6%20Cows%20Gone%20Mad%20Whitepaper%202024.pdf" download={true} 
                className="inline-block p-1 text-sm font-bold uppercase text-accent">whitepaper</a>
            </li>
            <li>
                <a className="inline-block p-1" href="https://x.com/cowsgonemad" target="_blank">
                    <XIcon />
                </a>
            </li>
            <li>
                <a className="inline-block p-1" href="https://t.me/CGMArmy" target="_blank">
                    <TelegramIcon />
                </a>
            </li>
            {/* <li>
                <a className="inline-block p-1">
                    <UbreIcon />
                </a>
            </li>
            <li>
                <a className="inline-block p-1">
                    <InstagramIcon />
                </a>
            </li>
            <li>
                <a className="inline-block p-1">
                    <DiscordIcon />
                </a>
            </li> */}
        </ul>
    );
};
