
import { useNavigate } from 'react-router-dom';

export default function useEditProfile()
{
    const navigate = useNavigate();

    return () => navigate(`/account/edit`);
}
