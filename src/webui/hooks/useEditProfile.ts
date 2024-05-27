
import { useNavigate } from 'react-router-dom';

export function useEditProfile()
{
    const navigate = useNavigate();

    return () =>
    {
        navigate(`/editProfile`);
    };
}
