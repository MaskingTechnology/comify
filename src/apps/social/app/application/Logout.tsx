
import LogoutPanel from './components/LogoutPanel';

import useLogout from './hooks/useLogout';

export default function Feature()
{
    const logout = useLogout();

    return <LogoutPanel onLogout={logout} />;
}
