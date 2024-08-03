'use client';

import React, { useEffect, useState } from 'react';

const IframePage = () => {
    const [iframeUrl, setIframeUrl] = useState<string>('');
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const iframe = 'http://localhost:3000/secret?key=mypassword'

    useEffect(() => {
        // Исправьте порт на 3001
        const ws = new WebSocket('ws://localhost:3001');

        ws.onopen = () => {
            console.log('WebSocket connection established');
            setIsConnected(true);
        };

        ws.onmessage = (event) => {
            console.log('Message from server:', event.data);
            setIframeUrl(event.data);
        };

        ws.onclose = (event) => {
            console.log('WebSocket connection closed:', event.reason);
            setIsConnected(false);
        };

        ws.onerror = (event) => {
            console.error('WebSocket error:', event);
            setError('WebSocket connection failed');
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <iframe
                src={iframe}
                width="100%"
                height="600"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default IframePage;

