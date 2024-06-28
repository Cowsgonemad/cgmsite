export const GameTab = ({ isActive, children }: { isActive: boolean, children: React.ReactNode }) => {

    const activeTab = 'md:block md:absolute size-full flex gap-10 opacity-100 translate-x-0 transition duration-20';
    const inactiveTab = 'hidden md:block md:absolute size-full flex gap-10 opacity-0 transition -translate-x-full duration-20';

    return(
        <div className={isActive ? activeTab : inactiveTab}>
            <div className="flex flex-col lg:flex-row gap-4 2xl:gap-8">
                {children}
            </div>
        </div>
    );
};