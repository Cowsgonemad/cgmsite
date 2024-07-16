export const CoinTab = ({ 
    isActive, 
    children 
}: { 
    isActive: boolean, 
    children: React.ReactNode 
}) => {

    const activeTab = '2xl:block 2xl:absolute top-0 max-w-full bg-white bg-opacity-60 p-6 rounded-2xl translate-x-0 opacity-100 transition duration-20';
    const inactiveTab = 'hidden 2xl:block 2xl:absolute top-0 max-w-full bg-white bg-opacity-60 p-6 rounded-2xl translate-x-full opacity-0 transition duration-20';
    
    return(
        <div className={isActive ? activeTab : inactiveTab}>
            {children}
        </div>
    );
};
