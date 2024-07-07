export const NFTTab = ({ isActive, children }: { isActive: boolean, children: React.ReactNode }) => {

    const activeTab = '2xl:flex 2xl:absolute size-full max-w-screen-xl transition flex gap-8  mx-auto opacity-100 translate-x-0 transition duration-20';
    const inactiveTab = 'hidden 2xl:block 2xl:absolute size-full max-w-screen-xl transition flex gap-8  mx-auto opacity-0 transition -translate-x-full duration-20';

    return(
        <div className={isActive ? activeTab : inactiveTab}>
            {children}
        </div>
    );
};
