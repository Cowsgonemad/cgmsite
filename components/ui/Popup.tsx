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
                className="rounded-lg relative transition duration-20 w-full max-w-[450px]">

                    <button title="Dismiss" 
                    className="absolute right-2 prose:-right-14 top-2 prose:top-0 rounded-full bg-black p-1 cursor-pointer z-20" 
                    onClick={handleDismiss}><CloseIcon fill={'white'} /></button>

                    <div className="relative bg-dark-blue">
                        <video className="rounded-lg opacity-0" autoPlay muted loop>
                            <source src="/videos/live.mp4" type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    <div className="bg-dark-blue text-white p-4 mt-2 rounded-lg">

                        <h4 className="font-bold text-xl">Official Contract Address of $Moo</h4>

                        <div className="flex justify-between gap-2 font-light my-2">
                            <p className="break-all text-sm">JJ4QpqUYzs9LUPrF6uJKQbkA4ofSnvkwQ3RBcVLFSjd</p>
                            <Copy text="JJ4QpqUYzs9LUPrF6uJKQbkA4ofSnvkwQ3RBcVLFSjd" />
                        </div>

                        <p>Beware of Scammers.</p>
                    </div>

                </div>
            </div>}
        </>
    );
};
