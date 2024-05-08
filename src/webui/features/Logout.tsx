
import { LogoutPanel } from '^/webui/components';
import { useLogout } from '^/webui/hooks';

export default function Feature()
{
    const logout = useLogout();

    return <LogoutPanel onLogout={logout} />;
}
