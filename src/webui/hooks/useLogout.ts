
import { useNavigate } from 'react-router-dom';

import logout from '^/domain/authentication/logout/feature';

import { useAppContext } from '^/webui/contexts';

export function useLogout()
{
    const navigate = useNavigate();
    const { setIdentity } = useAppContext();

    return async () =>
    {
        await logout();

        setIdentity(undefined);

        navigate('/');
    };
}
