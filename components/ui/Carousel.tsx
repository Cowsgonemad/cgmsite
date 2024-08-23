import { useRef, useState } from "react";
import useSwipe from "@/hooks/useSwipe";

export const Carousel = ({
    list
}: {
    list: {src: string, alt: string}[]
}) => {

    const [state, setState] = useState({
        active: 0,
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
            left: div.current.clientWidth * index
        });
    }

    return(
        <div className="relative">

            <div ref={div} {...swipeHandlers} className="relative flex" style={{ left: -state.left, transition: '.2s' }}>
                
                {list.map(el => 
                    <div key={el.src} className="w-full max-w-full h-screen-70 shrink-0 flex items-center justify-center py-6">
                        <img loading="lazy" className="max-w-full max-h-full" src={el.src} alt={el.alt} />
                    </div>
                )}

            </div>

            <div className="p-6">

                <ul className="flex justify-center gap-3 flex-wrap mb-2">
                    {
                        list.map((el, i) =>
                            <li key={el.src}>
                                <button onClick={() => navigate(i)}>
                                    <span className="block h-2 w-2 rounded-full bg-black" style={{ opacity: state.active !== i ? 0.2 : 1 }}></span>
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* <button className="absolute h-full flex items-end p-6 top-0 left-0"
            style={{ opacity: state.active > 0 ? 1 : 0.2 }} 
            onClick={prev}><AngleLeftIcon /></button>

            <button className="absolute h-full flex items-end p-6 top-0 right-0"
            style={{ opacity: state.active < list.length - 1 ? 1 : 0.2 }} 
            onClick={next}><AngleRightIcon /></button> */}

        </div>
    );
};
