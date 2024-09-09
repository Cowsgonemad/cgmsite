import { useEffect, useState } from "react";
import { CloseIcon } from "../icons";

export const Popup = () => {

    const [render, setRender] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setRender(true);
        setTimeout(() => {
            setShow(true);
        }, 10);
    }, []);

    const handleDismiss = () => {
        setShow(false);
        setTimeout(() => {
            setRender(false);
        }, 200);
    }

    return(
        <>
            {render && <div onClick={handleDismiss} 
            className="fixed bg-black bg-opacity-70 top-0 left-0 size-full flex items-center justify-center p-2 z-50 transition duration-20" style={{ opacity: show ? '1' : '0' }}>

                <div style={{ transform: show ? 'translateY(0)' : 'translateY(100px)' }}
                className="bg-white rounded-lg p-6 w-full max-w-prose h-screen-4/5 relative transition duration-20">

                    <button title="Dismiss" className="absolute right-2 prose:-right-14 top-2 prose:top-0 rounded-full" 
                    onClick={handleDismiss}><CloseIcon fill={'black'} /></button>

                    <img className="block size-full object-contain" src="/img/PRESALE-ANNOUN.jpg" alt="MooMoo Pre-sale Announcement" />
                </div>
            </div>}
        </>
    );
};
