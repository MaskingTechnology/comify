
import React from 'react';

import { Column } from '../designsystem/module';

import { ApplicationIntroduction, ApplicationLegalInfo } from '../components/module';

export default function Feature()
{
    return <Column gap='medium' alignX='stretch' alignY='top'>
        <ApplicationIntroduction />
        <ApplicationLegalInfo />
    </Column>;
}
