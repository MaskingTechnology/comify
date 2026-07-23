
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import getCreatorByNickname from '^/domain/creator/getByNickname';

export default function useProfile(nickname?: string)
{
    const getProfile = useCallback(async () =>
    {
        if (nickname === undefined)
        {
            return undefined;
        }

        return getCreatorByNickname(requester, nickname);

    }, [nickname]);

    return useLoadData(getProfile, []);
}
