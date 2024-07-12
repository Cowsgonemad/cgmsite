import axios from 'axios';
import { SubscribeArrowIcon } from "@/components/icons";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { AlertContext } from '@/app/page';
import { Spinner } from '@/components/ui';

export const EmailForm = () => {

    const { alerts, setAlerts } = useContext(AlertContext);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (loading) { return; }

        if (!executeRecaptcha) {
            console.error('ReCAPTCHA not available');
            return;
        }

        setLoading(true);

        const gRecaptchaToken = await executeRecaptcha('registerSubmit');

        try {

            const response = await axios.post(process.env.URL_FORM_POST as string, { email, gRecaptchaToken }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );

            setAlerts([...alerts, { message: response.data.message, type: 'success' }]);
            setLoading(false);

        } catch (error) {
            console.log(error);

            if ((error as any).response.status === 409) setAlerts([...alerts, { message: 'Email is already registered.', type: 'error' }]);
            else setAlerts([...alerts, { message: (error as any).response.data.errorMessage, type: 'error' }]);

            setLoading(false);
        }
    };

    return(
        <form className="relative" onSubmit={handleSubmit}>

            <label htmlFor="subscribe" className="absolute font-extrabold text-accent -top-6 right-8">
                Subscribe
            </label>

            <div className="absolute -top-2 -left-2 -z-10 w-6 h-4 border-t border-l border-t-accent border-l-accent"></div>
            <div className="absolute -bottom-2 -left-2 -z-10 w-6 h-4 border-b border-l border-b-accent border-l-accent"></div>
            <div className="absolute -top-2 -right-2 -z-10 w-6 h-4 border-t border-r border-t-accent border-r-accent"></div>
            <div className="absolute -bottom-2 -right-2 -z-10 w-6 h-4 border-b border-r border-b-accent border-r-accent"></div>
            
            <input type="email" id="subscribe"
            className="w-full pl-8 pr-24 py-3 bg-accent bg-opacity-10 text-white text-base border border-accent transition duration-20 font-light"
            placeholder="Your email" value={email} onChange={handleChange} minLength={3} maxLength={320} required />

            {!loading && <button className="absolute right-4 top-3"><SubscribeArrowIcon /></button>}
            {loading && <div className="absolute right-10 top-3"><Spinner /></div>}
        </form>
    );
};
