export const NavigationLink = ({
    children, label, navigateTo
}: {
    children: React.ReactNode,
    label: string,
    navigateTo: () => void
}) => {

    return(
        <li className="relative">
            <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10 border border-dark-grey">{label}</div>
            <button className="p-1" onClick={() => navigateTo()}>
                {children}
            </button>
        </li>
    );
};
