export const CoinTab = ({ 
    isActive, 
    children 
}: { 
    isActive: boolean, 
    children: React.ReactNode 
}) => {

    const activeTab = 'md:block md:absolute top-0 max-w-full translate-x-0 opacity-100 transition duration-20';
    const inactiveTab = 'hidden md:block md:absolute top-0 max-w-full translate-x-full opacity-0 transition duration-20';
    
    return(
        <div className={isActive ? activeTab : inactiveTab}>
            {children}
        </div>
    );
};
