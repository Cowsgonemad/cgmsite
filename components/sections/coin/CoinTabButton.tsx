export const CoinTabButton = ({  
    label, 
    isActive, 
    onClick 
}: { 
    label: string, 
    isActive: boolean, 
    onClick: () => void 
}) => {

    const activeButton = 'bg-accent uppercase py-2 px-4 w-36 font-extrabold text-sm text-dark-green';
    const inactiveButton = 'bg-dark-green uppercase py-2 px-4 hover:text-dark-green hover:bg-accent cursor-pointer w-36 font-extrabold text-sm text-accent';

    return(
        <button className={isActive ? activeButton : inactiveButton}
        onClick={onClick}>
            {label}
        </button>
    );
};
