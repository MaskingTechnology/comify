
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';
import getByOriginConverted from '@comify/common/domain/tenant/getByOriginConverted';

export function useTenant()
{
    const getTenant = useCallback(async () =>
    {
        return await getByOriginConverted(tenant.origin);

    }, []);

    return useLoadData(getTenant, []);
}
