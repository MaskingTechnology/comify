
import { useNavigate } from 'react-router-dom';

export default function hook()
{
    const navigate = useNavigate();

    return () =>
    {
        navigate('/login');
    };
}
