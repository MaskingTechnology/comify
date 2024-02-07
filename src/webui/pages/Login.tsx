
import React from 'react';

import { HomeLayout } from '../layouts/module';

import Login from '../features/Login';

export default function Page()
{
    return <HomeLayout>
        <Login />
    </HomeLayout>;
}
