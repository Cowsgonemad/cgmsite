import { AlertContext } from "@/context";
import { useContext } from "react";

export const Copy = ({ text }: { text: string }) => {

    const { alerts, setAlerts } = useContext(AlertContext);

    const handleCopy = async () => {

        if ('clipboard' in navigator) {
            await navigator.clipboard.writeText(text);
        } else {
            document.execCommand('copy', true, text);
        }
        
        setAlerts([...alerts, { id: new Date().getTime(), message: 'Copied to clipboard', type: 'success' }]);
    };

    return(
        <button onClick={handleCopy} title="Copy to clipboard">
            <svg viewBox="0 0 255.993 255.993" xmlns="http://www.w3.org/2000/svg" fill="white" width={24}><path d="M231.993 35.994v140.001a12 12 0 0 1-24 0v-128H79.986a12 12 0 0 1 0-24h140.007a12 12 0 0 1 12 12Zm-40 40.001v140a12 12 0 0 1-12 12H39.986a12 12 0 0 1-12-12v-140a12 12 0 0 1 12-12h140.007a12 12 0 0 1 12 12Zm-24 12H51.986v116h116.007Z"/></svg>
        </button>
    );
};