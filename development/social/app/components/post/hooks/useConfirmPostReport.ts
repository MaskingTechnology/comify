
import { useNavigate } from 'react-router-dom';

export default function useConfirmPostReport()
{
    const navigate = useNavigate();

    return () => navigate('report');
}
