
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

        }
        catch (Error: unknown)
        {
            if (Error instanceof NicknameAlreadyExists)
            {
                setAlreadyInUse(true);
                return;
            }
            else
            {
                throw (Error);
            }
        }
    };

    return { alreadyInUse, handler };
}    
