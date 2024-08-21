import { useEffect, useRef, useState } from "react";
import { AngleLeftIcon, AngleRightIcon, CloseIcon, ZoomInIcon, ZoomOutIcon } from "../icons";

export const Lightbox = ({
    list, open, initial, close
}: {
    list: {src: string, alt: string}[],
    open: boolean,
    initial: number,
    close: () => void
}) => {

    const [index, setIndex] = useState(initial);
    const [zoom, setZoom] = useState(0.2);

    const img = useRef<HTMLImageElement>(null);

    let src = list[index].src;
    let alt = list[index].alt;

    const prev = () => {
        if (index <= 0) { return; }
        setIndex(index - 1);
    };
    const next = () => {
        if (index >= list.length - 1) { return; }
        setIndex(index + 1);
    };

    const zin = () => {
        if (zoom >= 1.4) { return; }
        const next = (zoom + 0.2).toFixed(1);
        setZoom(Number(next));
    };
    const zout = () => {
        if (zoom <= 0.2) { return; }
        const next = (zoom - 0.2).toFixed(1);
        setZoom(Number(next));
    };

    useEffect(() => {
        setIndex(initial);
    }, [initial]);

    useEffect(() => {

        if (open) {

            if (!img || !img.current) { return; }
            src = list[initial].src;
            alt = list[initial].alt;
            const w = img.current.naturalWidth;
            img.current.style.width = `${w*zoom}px`;
        }
        
    }, [open, initial]);

    useEffect(() => {

        if (!img || !img.current) { return; }
        const w = img.current.naturalWidth;
        img.current.style.width = `${w*zoom}px`;
        
    }, [zoom]);

    return(
        <>
            {open && <div className="fixed size-full top-0 left-0 bg-black bg-opacity-70 z-50">

                <div className="fixed w-full flex bg-black opacity-90 justify-center text-white px-6 z-10">

                    <div className="ml-auto flex gap-4">
                        <button onClick={zin} title="Zoom In" className="py-4"><ZoomInIcon /></button>
                        <button onClick={zout} title="Zoom Out" className="py-4"><ZoomOutIcon /></button>
                    </div>

                    <div className="ml-auto">
                        <button title="Dismiss" className="py-4" onClick={close}><CloseIcon /></button>
                    </div>
                </div>

                <div className="size-full max-w-full max-h-full overflow-auto text-center">
                    <div className="pt-28">
                        <img style={{transition: '.2s'}} src={src} alt={alt} className="inline-block max-w-[unset]" ref={img} />
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-8">
                    <button className="bg-black rounded-full p-2" onClick={prev}>
                        <AngleLeftIcon />
                    </button>
                    <button className="bg-black rounded-full p-2" onClick={next}>
                        <AngleRightIcon />
                    </button>
                </div>

            </div>}
        </>
    );
};
