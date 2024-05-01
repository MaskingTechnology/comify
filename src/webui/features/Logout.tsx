
import { LogoutPanel } from '^/webui/components/module';
import { useLogout } from '^/webui/hooks/module';

export default function Feature()
{
    const logout = useLogout();

    return <LogoutPanel onLogout={logout} />;
}
