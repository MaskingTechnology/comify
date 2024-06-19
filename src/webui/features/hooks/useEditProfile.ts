
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useEditProfile()
{
    const navigate = useNavigate();

    return useCallback(() =>
    {
        navigate(`/edit/profile`);

    }, [navigate]);
}
