
import { useNavigate } from 'react-router-dom';

export default function hook()
{
    const navigate = useNavigate();

    const handler = () =>
    {
        navigate('/login');
    };

    return handler;
}
