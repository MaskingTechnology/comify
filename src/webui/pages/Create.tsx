
import React from 'react';

import CreateComic from '../features/CreateComic';
import Application from './templates/Application';

export default function Page()
{
    return <Application>
        <CreateComic />
    </Application>;
}
