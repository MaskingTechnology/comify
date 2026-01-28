
import { useCallback, useState } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';
import updateNickname from '^/domain/creator/updateNickname';
import NicknameAlreadyExists from '^/domain/creator/updateNickname/NicknameAlreadyExists';
import { tenant } from '^/domain/tenant';

import { useAppContext } from '~/app/application';

export default function useUpdateNickname()
{
    const [alreadyInUse, setAlreadyInUse] = useState<boolean>(false);
    const { setIdentity, identity } = useAppContext();

    const handleUpdate = useCallback(async (nickname: string) => 
    {
        try
        {
            await updateNickname(tenant, requester, nickname);

            setIdentity({ ...identity, nickname } as AggregatedCreatorData);
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
