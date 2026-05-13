
import { useNavigate } from 'react-router-dom';

export default function useConfirmPostRemoval()
{
    const navigate = useNavigate();

    return async (): Promise<void> => navigate('remove');
}
