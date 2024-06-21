
import { useCallback, useState } from 'react';

export type EngageHandler = () => Promise<boolean>;

export default function useEngagement(isEngaged: boolean, count: number, onClick: EngageHandler)
{
    const [isRated, setIsRated] = useState<boolean>(isEngaged);
    const [ratingCount, setRatingCount] = useState<number>(count);

    const handleClick = useCallback(async () =>
    {
        const isRated = await onClick();

        isRated
            ? setRatingCount(ratingCount + 1)
            : setRatingCount(ratingCount - 1);

        setIsRated(isRated);

    }, [onClick, ratingCount]);

    return [isRated, ratingCount, handleClick] as const;
}
