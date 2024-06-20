import Image from 'next/image';

export const Arrows = ({ prev, next }: { prev: () => void, next: () => void }) => {
    return(
        <>
            <button className="absolute top-1/2 -translate-y-1/2 left-20 z-10 animate-soft-bounce active:opacity-50 active:scale-50" onClick={prev}>
                <Image src="/img/nft-prev.svg" width="100" height="100" alt="Previous" />
            </button>

            <button className="absolute top-1/2 -translate-y-1/2 right-20 z-10 animate-soft-bounce active:opacity-50 active:scale-50" onClick={next}>
                <Image src="/img/nft-next.svg" width="100" height="100" alt="Next" />
            </button>
        </>
    );
};
