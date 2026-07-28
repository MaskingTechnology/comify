
import LogoutPanel from './components/LogoutPanel';

import useLogout from './hooks/useLogout';

export default function ()
{
    const logout = useLogout();

    return <LogoutPanel onLogout={logout} />;
}
