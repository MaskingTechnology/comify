
import { useCallback } from 'react';

import getByOriginConverted from '^/domain/tenant/getByOriginConverted';

import { useLoadData } from '^/webui/hooks';

export function useTenant()
{
    const getTenant = useCallback(async () =>
    {
        const tenant = await getByOriginConverted('');

        return tenant;

    }, []);

    return useLoadData(getTenant, []);
}
