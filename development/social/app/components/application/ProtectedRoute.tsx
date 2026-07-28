
import { Outlet } from 'react-router-dom';

import { useAppContext } from './contexts/AppContext';

import Login from './Login';

export default function ()
{
    const { identity } = useAppContext();

    if (identity === undefined)
    {
        return <Login />;
    }

    return <Outlet />;
}
