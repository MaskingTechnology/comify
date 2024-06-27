
import { useMemo, useState } from 'react';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { useModal } from '^/webui/hooks/useModal';

export default function useAppContextValue(initialIdentity: CreatorView | undefined)
{
    const [identity, setIdentity] = useState<CreatorView | undefined>(initialIdentity);
    const [modalContent, modalOpen, showModal, closeModal] = useModal();

    return useMemo(() => (
        {
            identity,
            setIdentity,
            modalContent,
            modalOpen,
            showModal,
            closeModal
        }
    ), [identity, modalContent, modalOpen, showModal, closeModal]);
}
