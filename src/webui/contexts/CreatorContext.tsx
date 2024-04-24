
import React, { useContext, useState } from 'react';

import type CreatorView from '^/domain/creator/view/CreatorView';

type Context = {
    creator: CreatorView | undefined;
    setCreator: (requester: CreatorView | undefined) => void;
};

export const CreatorContext = React.createContext({} as Context);
export const useCreatorContext = () => useContext(CreatorContext);

type Props = {
    values?:
    {
        creator: CreatorView | undefined;
    };
    children: React.ReactNode;
};

export function CreatorContextProvider({ values, children }: Props)
{
    const [creator, setCreator] = useState<CreatorView | undefined>(values?.creator);

    return <CreatorContext.Provider value={{ creator, setCreator }}>
        {children}
    </CreatorContext.Provider>;
}
