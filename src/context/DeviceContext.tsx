// src/context/ConContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ConContextType = {
    device: string;
    setDevice: (value: string) => void;
};

const DeviceContext = createContext<ConContextType | undefined>(undefined);

export const DeviceContextProvider = ({ children }: { children: ReactNode }) => {
    const [device, setDevice] = useState('wo'); // initial value

    return (
        <DeviceContext.Provider value={{ device, setDevice }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDeviceContext = () => {
    const context = useContext(DeviceContext);
    if (!context) throw new Error('useCon must be used within ConProvider');
    return context;
};
