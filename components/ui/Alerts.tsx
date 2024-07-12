import { AlertContext } from "@/app/page";
import { useContext } from "react";
import { TimesIcon } from "../icons";

export const Alerts = () => {

    const { alerts, setAlerts } = useContext(AlertContext);

    return(
        <div className="fixed top-24 right-4 flex flex-col gap-2 w-full max-w-80">
            {alerts.map(alert => 
                <div className="w-full bg-black text-slate-300 text-sm font-light p-4 flex gap-2 justify-between items-start rounded">

                    <p>
                        <strong className="text-xs font-extrabold uppercase mr-2" style={{ color: alert.type === 'success' ? 'rgb(var(--accent))' : 'rgb(var(--red))' }}>{alert.type}</strong> {alert.message}
                    </p> 
                    
                    <button className="" onClick={() => setAlerts(alerts.filter(a => a !== alert))}>
                        <TimesIcon />
                    </button>
                </div>
            )}
        </div>
    );
};
