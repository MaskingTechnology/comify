
import { useNavigate } from 'react-router-dom';

export default function useConfirmPostRemoval()
{
    const navigate = useNavigate();

    return async (post: unknown): Promise<void> => navigate('remove');
}
