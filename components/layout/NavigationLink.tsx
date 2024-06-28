export const NavigationLink = ({
    children, label, navigateTo
}: {
    children: React.ReactNode,
    label: string,
    navigateTo: () => void
}) => {

    return(
        <li className="relative">
            <button title={label} className="p-1 flex items-center" onClick={() => navigateTo()}>
                {children}
                <span className="absolute md:static font-extrabold uppercase whitespace-nowrap text-xs text-white -z-10 ml-2 hidden md:block">
                    {label}
                </span>
            </button>
        </li>
    );
};
