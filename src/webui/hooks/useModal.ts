
import type { ReactNode} from 'react';
import { useCallback, useState } from 'react';

export function useModal()
{
    const [modalContent, setModalContent] = useState<ReactNode | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const showModal = useCallback((content: ReactNode | undefined) =>
    {
        setModalContent(content);
        setModalOpen(true);

    }, []);

    const closeModal = useCallback(() =>
    {
        setModalContent(undefined);
        setModalOpen(false);

    }, []);

    return [modalContent, modalOpen, showModal, closeModal] as const;
}
