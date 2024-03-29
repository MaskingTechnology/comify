
import { useNavigate } from 'react-router-dom';
import logout from '../../domain/authentication/logout';
import { LogoutPanel } from '../components/module';
import { useAppContext } from '../contexts/AppContext';

export default function Feature()
{
    const navigate = useNavigate();
    const { setIdentity } = useAppContext();

    const doIt = async () =>
    {
        await logout();

        setIdentity(undefined);

        navigate('/');
    };

    return <LogoutPanel logoutHandler={doIt} />;
}
