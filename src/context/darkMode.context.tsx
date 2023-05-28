'use client';

import { createContext, useContext, useState } from "react";

type darkModeType = {
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
}

const DarkContext = createContext<darkModeType | null>(null)

export const DarkContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <DarkContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkContext.Provider>
    )
};

export const useDarkContext = () => useContext(DarkContext);