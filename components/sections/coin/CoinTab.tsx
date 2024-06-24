export const CoinTab = ({ 
    isActive, 
    children 
}: { 
    isActive: boolean, 
    children: React.ReactNode 
}) => {
    
    return(
        <div className="transition duration-20 absolute top-0 max-w-full" style={{
            transform: isActive ? 'translateX(0)' : 'translateX(-100%)',
            opacity: isActive ? 1 : 0
        }}>
            {children}
        </div>
    );
};
