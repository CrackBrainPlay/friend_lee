'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import NotFound from '@/app/not-found';


const MainPage = () => {
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/check');

                if (response.status === 404) {
                    setError(true);
                    setMessage('404 - Page not found');
                } else {
                    setMessage(response.data.message);
                }
            } catch (error) {
                setError(true);
                setMessage('404 - Page not found');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return (
            <NotFound />
        )
    }


    return (
        <h1>Home Page</h1>
    );
};

export default MainPage;