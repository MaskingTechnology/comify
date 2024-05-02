
import { useNavigate } from 'react-router-dom';

import logout from '^/domain/authentication/logout';

import { useAppContext } from '^/webui/contexts';

export default function hook()
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
