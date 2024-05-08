
import { useNavigate } from 'react-router-dom';

export function useNavigateHome()
{
    const navigate = useNavigate();

    return () =>
    {
        navigate('/login');
    };
}
