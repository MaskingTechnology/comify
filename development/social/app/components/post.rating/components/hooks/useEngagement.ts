
import { useCallback, useState } from 'react';

export type EngageHandler = () => Promise<boolean>;

export default function useEngagement(isEngaged: boolean, count: number, engage: EngageHandler)
{
    const [isRated, setIsRated] = useState<boolean>(isEngaged);
    const [ratingCount, setRatingCount] = useState<number>(count);

    const handleClick = useCallback(async () =>
    {
        const updatedIsRated = !isRated;

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        updatedIsRated
            ? setRatingCount(ratingCount + 1)
            : setRatingCount(ratingCount - 1);

        setIsRated(updatedIsRated);

        await engage();

    }, [engage, ratingCount]);

    return [isRated, ratingCount, handleClick] as const;
}
