
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import useAppContextValue from './hooks/useAppContextValue';

type Context = {
    identity: AggregatedCreatorData | undefined;
    setIdentity: (requester: AggregatedCreatorData | undefined) => void;
    modalContent: ReactNode | undefined;
    modalOpen: boolean;
    showModal: (content: ReactNode | undefined) => void;
    closeModal: () => void;
};

export const AppContext = createContext({} as Context);
export const useAppContext = () => useContext(AppContext);

type Props = {
    readonly values?:
    {
        identity: AggregatedCreatorData | undefined;
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
