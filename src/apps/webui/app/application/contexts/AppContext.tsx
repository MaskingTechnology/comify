
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type { AggregatedData as IdentityModel } from '^/domain/creator/aggregate';

import useAppContextValue from './hooks/useAppContextValue';

type Context = {
    identity: IdentityModel | undefined;
    setIdentity: (identity: IdentityModel | undefined) => void;
    appState: Map<string, unknown>;
};

export const AppContext = createContext({} as Context);
export const useAppContext = () => useContext(AppContext);

type Props = {
    readonly values?:
    {
        identity: IdentityModel | undefined;
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
