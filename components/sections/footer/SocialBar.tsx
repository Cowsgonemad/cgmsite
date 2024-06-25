import { DiscordIcon, InstagramIcon, TelegramIcon, UbreIcon, XIcon } from '../../icons';

export const SocialBar = () => {

    return(
        <ul className="opacity-50 flex gap-6 mt-3 mb-6 justify-center">
            <li>
                <a className="inline-block p-1">
                    <XIcon />
                </a>
            </li>
            <li>
                <a className="inline-block p-1">
                    <TelegramIcon />
                </a>
            </li>
            <li>
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
            </li>
        </ul>
    );
};
