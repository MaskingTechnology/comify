
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import logout from '^/domain/authentication/logout/feature';

import { useAppContext } from '^/webui/contexts';

export default function useLogout()
{
    const navigate = useNavigate();
    const { setIdentity } = useAppContext();

    return useCallback(async () =>
    {
        await logout();

        setIdentity(undefined);

        navigate('/');

    }, [navigate, setIdentity]);
}
