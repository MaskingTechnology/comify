
import { Outlet } from 'react-router-dom';

import { Column, Ruler } from '@maskingtech/designsystem';

import type { Creator } from '^/domain/creator';

import { useAppContext } from '~/components/application';
import { Profile } from '~/components/creator';

export default function ()
{
    const { identity } = useAppContext();

    return <Column gap='medium' alignX='stretch'>
        <Profile creator={identity as Creator} />
        <Ruler direction='horizontal' size='small' />
        <Outlet context={{ identity }} />
    </Column>;
}
