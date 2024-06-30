export const CoinTab = ({ 
    isActive, 
    children 
}: { 
    isActive: boolean, 
    children: React.ReactNode 
}) => {

    const activeTab = 'xl:block xl:absolute top-0 max-w-full translate-x-0 opacity-100 transition duration-20';
    const inactiveTab = 'hidden xl:block xl:absolute top-0 max-w-full translate-x-full opacity-0 transition duration-20';
    
    return(
        <div className={isActive ? activeTab : inactiveTab}>
            {children}
        </div>
    );
};
