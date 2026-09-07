
import { useCallback, useState } from 'react';

import { requester } from '@comify/common/security';

import { type Creator } from '^/domain/creator';
import updateNickname from '^/domain/creator/updateNickname';
import NicknameAlreadyExists from '^/domain/creator/updateNickname/NicknameAlreadyExists';

import { useAppContext } from '~/components/application';

export default function useUpdateNickname()
{
    const [alreadyInUse, setAlreadyInUse] = useState<boolean>(false);
    const { setIdentity, identity } = useAppContext();

    const handleUpdate = useCallback(async (nickname: string) => 
    {
        try
        {
            await updateNickname(requester, nickname);

            setIdentity({ ...identity, nickname } as Creator);
            setAlreadyInUse(false);
        }
        catch (error)
        {
            if (error instanceof NicknameAlreadyExists)
            {
                setAlreadyInUse(true);

                return;
            }

            throw error;
        }
    }, [setIdentity, identity]);

    return [alreadyInUse, handleUpdate] as const;
}    
