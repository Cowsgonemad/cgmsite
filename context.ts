import { createContext } from "react";

export const AlertContext = createContext<{
    alerts: {id: number, message: string, type: 'success' | 'error'}[],
    setAlerts: (alerts: {id: number, message: string, type: 'success' | 'error'}[]) => void
}>({
    alerts: [] as {id: number, message: string, type: 'success' | 'error'}[],
    setAlerts: () => {}
});
