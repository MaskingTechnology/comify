
import React from 'react';

import Application from './templates/Application';

import { OrderSelection, PostList } from '../components/module';

export default function Timeline()
{
    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    return <Application>
        <OrderSelection selected='recent' changeHandler={handleOrderChange} />
        <PostList />
    </Application>;
}
