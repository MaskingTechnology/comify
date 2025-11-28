
import { LogoutPanel } from '^/webui/components';

import useLogout from './hooks/useLogout';

export default function Feature()
{
    const logout = useLogout();

    return <LogoutPanel onLogout={logout} />;
}
