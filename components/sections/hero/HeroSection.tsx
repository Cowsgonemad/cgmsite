import { Screen } from '../../layout';

export const HeroSection = ({ 
    navigateTo,
}: { 
    navigateTo: (screen: number) => void,
}) => {

    return(
        <Screen id="hero" containerClasses="bg-hero h-screen">

            <button className="hidden md:block absolute right-10 bottom-10 animate-bounce bg-dark-blue rounded-full p-3" 
            onClick={() => navigateTo(1)}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                    <path d="m21.71 8.41-2.83-2.82a1 1 0 0 0-1.42 0L12 11.05 6.54 5.59a1 1 0 0 0-1.42 0L2.29 8.42a1 1 0 0 0 0 1.41l8.29 8.29a2 2 0 0 0 2.84 0l8.29-8.3a1 1 0 0 0 .29-.71 1 1 0 0 0-.29-.7Z" fill="rgb(var(--accent))" />
                </svg>
            </button>

        </Screen>
    );
};
