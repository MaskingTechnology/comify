
import { Outlet } from 'react-router-dom';

import { Column, Ruler } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import { useAppContext } from '~/app/application';
import { Profile } from '~/app/creator';

export default function Feature()
{
    const { identity } = useAppContext();

    return <Column gap='medium' alignX='stretch'>
        <Profile creator={identity as AggregatedCreatorData} />
        <Ruler direction='horizontal' size='small' />
        <Outlet context={{ identity }} />
    </Column>;
}
