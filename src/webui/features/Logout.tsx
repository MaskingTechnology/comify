
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logout from '../../domain/authentication/logout';
import { useAppContext } from '../contexts/AppContext';

export default function Feature()
{
    const navigate = useNavigate();
    const { setIdentity } = useAppContext();

    const perform = async () =>
    {
        await logout();

        setIdentity(undefined);

        navigate('/');
    };

    useEffect(() => { perform(); }, []);

    return <>Logging out...</>;
}
