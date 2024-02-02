
import React from 'react';

import { Column } from '../designsystem/module';

import { HomeLayout } from '../layouts/module';

import Introduction from '../features/Introduction';
import LegalInfo from '../features/LegalInfo';

export default function Page()
{
    return <HomeLayout>
        <Column gap='medium' alignX='stretch' alignY='top'>
            <Introduction />
            <LegalInfo />
        </Column>
    </HomeLayout>;
}
