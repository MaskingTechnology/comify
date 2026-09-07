
import { type ReactNode, createContext, useContext } from 'react';

import { type Creator } from '^/domain/creator';

import useAppContextValue from './hooks/useAppContextValue';

type Context = {
    identity: Creator | undefined;
    setIdentity: (identity: Creator | undefined) => void;
    appState: Map<string, unknown>;
};

export const AppContext = createContext({} as Context);
export const useAppContext = () => useContext(AppContext);

type Props = {
    readonly values?:
    {
        identity: Creator | undefined;
    };
    readonly children: ReactNode;
};

export function AppContextProvider({ values, children }: Props)
{
    const contextValue = useAppContextValue(values?.identity);

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>;
}
