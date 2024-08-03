'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const MainPage = () => {
    const [message, setMessage] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/check');
                if (response.status === 404) {
                    setMessage('404 - Page not found');
                } else {
                    setMessage(response.data.message);
                }
            } catch (error) {
                router.push('/404');
            }
        };

        fetchData();
    }, [router]);


    return (
        <h1>Home Page</h1>
    );
};

export default MainPage;