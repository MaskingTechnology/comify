
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import getCreatorByNickname from '^/domain/creator/getByNicknameAggregated';
import { tenant } from '^/domain/tenant';

export default function useProfile(nickname?: string)
{
    const getProfile = useCallback(async () =>
    {
        if (nickname === undefined)
        {
            return undefined;
        }

        return getCreatorByNickname(tenant, requester, nickname);

    }, [nickname]);

    return useLoadData(getProfile, []);
}
