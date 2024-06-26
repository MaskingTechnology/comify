
import { useCallback, useState } from 'react';

type States = 'unestablished' | 'establishing' | 'established';
type EstablishHandler = () => Promise<void>;

export default function useEstablish(isFollowing: boolean, establish: EstablishHandler)
{
    const [status, setStatus] = useState<States>(isFollowing ? 'established' : 'unestablished');

    const handleClick = useCallback(async () =>  
    {
        setStatus('establishing');

        await establish();

        setStatus('established');

    }, [establish]);

    return [status, handleClick] as const;
}
