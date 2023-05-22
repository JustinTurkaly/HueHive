/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';

type AppContextType = {
  global: any;
  setGlobalState: React.Dispatch<React.SetStateAction<any>>;
};

export const AppContext = createContext<AppContextType>({
  global: null,
  setGlobalState: () => {},
});

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [global, setGlobalState] = useState<any>({
    pageCounter: 0,
    generator: {
      industry: [],
      adjectives: [],
      companies: [],
      colors: [],
    },
    gptPallete: [],
    customPalette: {
      lShades: [],
      lAccent: [],
      mainColor: [],
      dAccent: [],
      dShades: [],
    },
    customPaletteBool: false,
  });

  return (
    <AppContext.Provider value={{ global, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};
