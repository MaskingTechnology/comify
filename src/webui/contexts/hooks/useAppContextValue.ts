
import { useMemo, useState } from 'react';

import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import { useModal } from '^/webui/hooks/useModal';

export default function useAppContextValue(initialIdentity: AggregatedCreatorData | undefined)
{
    const [identity, setIdentity] = useState<AggregatedCreatorData | undefined>(initialIdentity);
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
