export const NavigationLink = ({
    isActive,
    children, 
    label, 
    navigateTo
}: {
    isActive: boolean,
    children: React.ReactNode,
    label: string,
    navigateTo: () => void
}) => {

    const active = 'py-1 px-2 flex items-center rounded-md bg-dark-blue';
    const inactive = 'py-1 px-2 flex items-center';

    return(
        <li className="relative">
            <button title={label} className={isActive ? active : inactive} onClick={() => navigateTo()}>
                {children}
                <span className="absolute lg:static font-semibold uppercase whitespace-nowrap text-sm text-white ml-2 hidden lg:block">
                    {label}
                </span>
            </button>
        </li>
    );
};
