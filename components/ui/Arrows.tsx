export const Arrows = ({ prev, next }: { prev: () => void, next: () => void }) => {
    return(
        <>
            <button className="absolute top-[12vh] left-2 xl:left-20 z-10 animate-soft-bounce active:opacity-50" onClick={prev}>
                <img src="/img/nft-prev.svg" className="w-14 xl:w-28" alt="Previous" />
            </button>

            <button className="absolute top-[12vh] right-2 xl:right-20 z-10 animate-soft-bounce active:opacity-50" onClick={next}>
                <img src="/img/nft-next.svg" className="w-14 xl:w-28" alt="Next" />
            </button>
        </>
    );
};
