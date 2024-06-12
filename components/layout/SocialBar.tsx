import { DiscordIcon, InstagramIcon, TikTokIcon, XIcon } from '../icons';

export const SocialBar = () => {

    return(
        <div className="flex justify-center p-4 bg-dark-green rounded-bl-xl">
            <ul className="opacity-70 mt-2">
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
                <li>
                    <a className="inline-block p-1">
                        <XIcon />
                    </a>
                </li>
                <li>
                    <a className="inline-block p-1">
                        <TikTokIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
};
