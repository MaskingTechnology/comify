
import { useNavigate } from 'react-router-dom';

export default function useNavigateLogin()
{
    const navigate = useNavigate();

    return () => navigate('login');
}
