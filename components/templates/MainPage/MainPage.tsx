'use client'
import React, { useState, useLayoutEffect } from 'react';
import NotFound from '@/app/not-found';


const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const [showNotFound, setShowNotFound] = useState(false);

    useLayoutEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('key');

        if (key) {
            const socket = new WebSocket('ws://localhost:3001');

            let intervalId: NodeJS.Timeout;

            socket.onopen = () => {
                intervalId = setInterval(() => {
                    socket.send(key);
                }, 5000);

                window.history.replaceState({}, '', '/');
                setLoading(false);
            };

            socket.onmessage = (event) => {
                console.log('Received message from server:', event.data);
            };

            socket.onerror = (error) => {
                console.error('WebSocket Error:', error);
            };

            return () => {
                if (intervalId) {
                    clearInterval(intervalId);
                }
                socket.close();
            };
        } else {
            setShowNotFound(true);
            setLoading(false);
        }
    }, []);

    if (loading) {
        return null;
    }

    return showNotFound ? <NotFound /> : <h1>home</h1>;
};

export default MainPage;