import useSwipe from "@/hooks/useSwipe";
import { useRef, useState } from "react";
import { AngleLeftIcon, AngleRightIcon } from "../icons";

export const Tv = ({
    list
}: {
    list: {src: string, title: string}[]
}) => {

    const [state, setState] = useState<{active: number, src: string, title: string, left: number}>({
        active: 0,
        src: list[0]?.src,
        title: list[0]?.title,
        left: 0
    });

    const swipeHandlers = useSwipe({ 
        onSwipedLeft: () => next(), 
        onSwipedRight: () => prev()
    });

    const div = useRef<HTMLDivElement>(null);

    const prev = () => {

        if (state.active <= 0) { return; }
        navigate(state.active - 1);
    };
    const next = () => {

        if (state.active >= list.length - 1) { return; }
        navigate(state.active + 1);
    };
    const navigate = (index: number) => {

        if (!div || !div.current) { return; }

        setState({
            active: index,
            src: list[index].src,
            title: list[index].title,
            left: div.current.clientWidth * index
        });
    }

    return(
    
        <div className="relative">

            <div ref={div} {...swipeHandlers} className="w-full bg-black rounded-3xl p-8" style={{ left: -state.left, transition: '.2s' }}>
                
                {state.src && <iframe className="size-full min-h-72 md:min-h-96 xl:h-[600px] rounded-3xl"
                src={state.src} title={state.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                <div className="mt-6 flex justify-between gap-4">

                    <ul className="flex items-end gap-3 flex-wrap">
                        {
                            list.map((el, i) =>
                                <li key={el.src}>
                                    <button onClick={() => navigate(i)}>
                                        <span className="block h-4 w-4 rounded-full bg-white" style={{ opacity: state.active !== i ? 0.2 : 1 }}></span>
                                    </button>
                                </li>
                            )
                        }
                    </ul>

                    <div className="flex items-end gap-2">
                        <button className="bg-white bg-opacity-10 rounded-full p-2"
                        style={{ opacity: state.active > 0 ? 1 : 0.2 }} 
                        onClick={prev}><AngleLeftIcon /></button>

                        <button className="bg-white bg-opacity-10 rounded-full p-2"
                        style={{ opacity: state.active < list.length - 1 ? 1 : 0.2 }} 
                        onClick={next}><AngleRightIcon /></button>
                    </div>
                </div>
                    
            </div>

        </div>
    );
};
