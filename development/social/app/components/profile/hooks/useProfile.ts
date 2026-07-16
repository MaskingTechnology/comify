
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import getCreatorByNickname from '^/domain/creator/getByNickname';

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
