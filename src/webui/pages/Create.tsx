
import React from 'react';

import CreateComic from '../features/CreateComic';
import ApplicationTemplate from './templates/Application';

export default function Page()
{
    return <ApplicationTemplate>
        <CreateComic />
    </ApplicationTemplate>;
}
