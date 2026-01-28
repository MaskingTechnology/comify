
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useShowCreateReaction()
{
    const navigate = useNavigate();

    return useCallback(() =>
    {
        navigate('reactions/create');

    }, [navigate]);
}
