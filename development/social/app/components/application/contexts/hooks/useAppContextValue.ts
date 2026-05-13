
import { useMemo, useState } from 'react';

import type { AggregatedData as IdentityModel } from '^/domain/creator/aggregate';

export default function useAppContextValue(initialIdentity?: IdentityModel)
{
    const [identity, setIdentity] = useState<IdentityModel | undefined>(initialIdentity);
    const appState = useMemo<Map<string, unknown>>(() => new Map(), []);

    return useMemo(() => (
        {
            identity,
            setIdentity,
            appState
        }
    ), [identity, appState]);
}
