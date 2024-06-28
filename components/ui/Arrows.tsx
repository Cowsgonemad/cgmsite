export const Arrows = ({ prev, next }: { prev: () => void, next: () => void }) => {
    return(
        <>
            <button className="absolute top-[10vh] left-4 xl:left-20 z-10 animate-soft-bounce active:opacity-50" onClick={prev}>
                <img src="/img/nft-prev.svg" className="w-14 lg:w-28" alt="Previous" />
            </button>

            <button className="absolute top-[10vh] right-4 xl:right-20 z-10 animate-soft-bounce active:opacity-50" onClick={next}>
                <img src="/img/nft-next.svg" className="w-14 lg:w-28" alt="Next" />
            </button>
        </>
    );
};
