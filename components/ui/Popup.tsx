import { useEffect, useState } from "react";
import { CloseIcon } from "../icons";
import { Copy } from "./Copy";

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
            className="fixed bg-black bg-opacity-70 top-0 left-0 size-full flex items-center justify-center p-2 z-40 transition duration-20" style={{ opacity: show ? '1' : '0' }}>

                <div onClick={(e) => e.stopPropagation()} 
                style={{ transform: show ? 'translateY(0)' : 'translateY(100px)' }}
                className="bg-white rounded-lg p-6 relative transition duration-20 w-full max-w-prose ">

                    <button title="Dismiss" className="absolute right-2 prose:-right-14 top-2 prose:top-0 rounded-full" 
                    onClick={handleDismiss}><CloseIcon fill={'black'} /></button>

                    <div className="h-screen-60 relative">
                        <img className="block size-full object-contain" src="/img/CGM-S-10.jpg" alt="MooMoo Pre-sale Announcement" />
                    </div>
                    
                    <div className="bg-dark-blue text-white p-4">

                        <h4 className="font-bold text-xl">Official Public Pre-Sale Wallet Address</h4>

                        <div className="flex justify-between gap-2 font-light my-2">
                            <p className="break-all">5NrFg1r3ikzvvGkQuzKnpEea86yqdQPXXV8RzJGNpE4f</p>
                            <Copy text="5NrFg1r3ikzvvGkQuzKnpEea86yqdQPXXV8RzJGNpE4f" />
                        </div>

                        <p>Beware of Scammers.</p>
                    </div>

                </div>
            </div>}
        </>
    );
};
