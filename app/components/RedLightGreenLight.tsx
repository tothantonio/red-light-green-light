import React, { useEffect, useState } from 'react';

const RedLightGreenLight = ({ isActive, onLightChange }: { isActive: boolean, onLightChange: (light: 'red' | 'green') => void }) => {
    const [light, setLight] = useState<'red' | 'green'>('red');

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            setLight(prev => {
                const newLight = prev === 'red' ? 'green' : 'red';
                onLightChange(newLight);
                return newLight;
            });
        }, 5000); 

        return () => clearInterval(interval);
    }, [isActive, onLightChange]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px', color: light === 'red' ? 'red' : 'green', fontSize: '24px' }}>
            {light === 'red' ? "It's red!" : "It's green!"}
        </div>
    );
};

export default RedLightGreenLight;
