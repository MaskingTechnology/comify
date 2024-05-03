
import React, { useContext, useState } from 'react';

import type CreatorView from '^/domain/creator/view/CreatorView';

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

    return <AppContext.Provider value={{ identity, setIdentity }}>
        {children}
    </AppContext.Provider>;
}
