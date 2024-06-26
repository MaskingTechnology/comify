
import { useCallback, useState } from 'react';

type EngageHandler = () => Promise<boolean>;

export default function useEngagement(isEngaged: boolean, count: number, engage: EngageHandler)
{
    const [isRated, setIsRated] = useState<boolean>(isEngaged);
    const [ratingCount, setRatingCount] = useState<number>(count);

    const handleClick = useCallback(async () =>
    {
        const isRated = await engage();

        isRated
            ? setRatingCount(ratingCount + 1)
            : setRatingCount(ratingCount - 1);

        setIsRated(isRated);

    }, [engage, ratingCount]);

    return [isRated, ratingCount, handleClick] as const;
}
