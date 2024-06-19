
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useNavigateHome()
{
    const navigate = useNavigate();

    return useCallback(() =>
    {
        navigate('/login');

    }, [navigate]);
}
