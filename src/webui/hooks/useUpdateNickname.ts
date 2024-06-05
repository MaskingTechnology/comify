
import { useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import updateNickname from '^/domain/creator/updateNickname/feature';
import NicknameAlreadyExists from '^/domain/creator/updateNickname/NicknameAlreadyExists';

import { useAppContext } from '^/webui/contexts';

export function useUpdateNickname()
{
    const [alreadyInUse, setAlreadyInUse] = useState<boolean>(false);
    const { setIdentity, identity } = useAppContext();

    const handler = async (nickname: string) => 
    {
        try
        {
            await updateNickname(requester, nickname);

            setIdentity({ ...identity, nickname } as CreatorView);
            setAlreadyInUse(false);
        }
        catch (error: unknown)
        {
            if (error instanceof NicknameAlreadyExists)
            {
                setAlreadyInUse(true);

                return;
            }

            throw error;
        }
    };

    return { alreadyInUse, handler };
}    
