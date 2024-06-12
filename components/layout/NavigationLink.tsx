export const NavigationLink = ({
    children, label, marginBottom, navigateTo
}: {
    children: React.ReactNode,
    label: string,
    marginBottom: boolean,
    navigateTo: () => void
}) => {

    const classes = `relative ${marginBottom ? 'mb-2' : ''}`;

    return(
        <li className={classes}>
            <div className="label absolute bg-white rounded-md font-extrabold uppercase text-dark-grey whitespace-nowrap py-3 px-4 text-sm -z-10">{label}</div>
            <button className="p-1" onClick={() => navigateTo()}>
                {children}
            </button>
        </li>
    );
};
