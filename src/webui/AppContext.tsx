
import React, { useContext, useState } from 'react';

import type CreatorView from '../domain/creator/view/CreatorView';

type ContextProps = {
    identity: CreatorView | undefined;
    setIdentity: (requester: CreatorView | undefined) => void;
};

export const AppContext = React.createContext({} as ContextProps);
export const useAppContext = () => useContext(AppContext);

export type Props = {
    children: React.ReactNode;
};

export default function AppContextProvider({ children }: Props)
{
    const [identity, setIdentity] = useState<CreatorView | undefined>(undefined);

    return <AppContext.Provider value={{ identity, setIdentity }}>
        {children}
    </AppContext.Provider>;
};
