
import React, { useContext, useMemo, useState } from 'react';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

type Context = {
    identity: CreatorView | undefined;
    setIdentity: (requester: CreatorView | undefined) => void;
};

export const AppContext = React.createContext({} as Context);
export const useAppContext = () => useContext(AppContext);

type Props = {
    readonly values?:
    {
        identity: CreatorView | undefined;
    };
    readonly children: React.ReactNode;
};

export function AppContextProvider({ values, children }: Props)
{
    const [identity, setIdentity] = useState<CreatorView | undefined>(values?.identity);

    const contextValue = useMemo(() => ({ identity, setIdentity }), [identity]);

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>;
}
