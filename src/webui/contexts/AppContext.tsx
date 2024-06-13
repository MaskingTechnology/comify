
import React, { useContext, useMemo, useState } from 'react';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

type Context = {
    identity: CreatorView | undefined;
    setIdentity: (requester: CreatorView | undefined) => void;
    modalContent: React.ReactNode | undefined;
    modalOpen: boolean;
    showModal: (content: React.ReactNode | undefined) => void;
    closeModal: () => void;
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
    const [modalContent, setModalContent] = useState<React.ReactNode | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const showModal = (content: React.ReactNode | undefined) =>
    {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () =>
    {
        setModalContent(undefined);
        setModalOpen(false);
    };

    const contextValue = useMemo(() =>
    (
        { identity, setIdentity, modalContent, modalOpen, showModal, closeModal }),
        [identity, modalContent, modalOpen]
    );

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>;
}
