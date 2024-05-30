
import { useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import updateNickname from '^/domain/creator/updateNickname';

import NicknameAlreadyExists from '^/domain/creator/errors/NicknameAlreadyExists';
import { useAppContext } from '^/webui/contexts';

export function useUpdateNickname()
{
    const [alreadyInUse, setAlreadyInUse] = useState<boolean>(false);
    const { setIdentity } = useAppContext();

    const handler = async (nickname: string) => 
    {
        try
        {
            const updatedCreator = await updateNickname(johnDoe, nickname);

            setIdentity(updatedCreator);
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
