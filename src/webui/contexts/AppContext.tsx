
import { ReactNode, createContext, useContext } from 'react';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import useAppContextValue from './hooks/useAppContextValue';

type Context = {
    identity: CreatorView | undefined;
    setIdentity: (requester: CreatorView | undefined) => void;
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
        identity: CreatorView | undefined;
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
