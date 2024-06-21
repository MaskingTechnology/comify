
import { useCallback, useEffect, useRef, useState } from 'react';

const MAX_PULL_DISTANCE = 128;
const REFRESH_THRESHOLD = 60;
const RESISTANCE_COEFFICIENT = 0.6;

export default function useRefreshOnPull(conversionFactor: number, onRefresh: () => void)
{
    const containerRef = useRef<HTMLDivElement>(null);
    const [distance, setDistance] = useState<number>(0);
    const [atThreshold, setAtThreshold] = useState<boolean>(false);
    const startY = useRef<number>(0);

    const calculateDistance = (differenceY: number) =>
    {
        // We use the exponential easing function to calculate the distance the user has pulled the container.

        const decay = Math.exp((-RESISTANCE_COEFFICIENT * differenceY) / MAX_PULL_DISTANCE);

        return MAX_PULL_DISTANCE * (1 - decay) / conversionFactor;
    };

    const handleStart = useCallback((event: TouchEvent) =>
    {
        startY.current = event.touches[0].clientY;

    }, []);

    const handleMove = useCallback((event: TouchEvent) =>
    {
        const currentY = event.touches[0].clientY;
        const dragDistance = currentY - startY.current;

        if (dragDistance > 0)
        {
            const distance = calculateDistance(dragDistance);

            setDistance(distance);

            distance > (REFRESH_THRESHOLD / conversionFactor)
                ? setAtThreshold(true)
                : setAtThreshold(false);
        }

    }, []);

    const handleEnd = useCallback((event: TouchEvent) =>
    {
        const currentY = event.changedTouches[0].clientY;
        const dragDistance = currentY - startY.current;

        const distance = calculateDistance(dragDistance);

        if (distance > (REFRESH_THRESHOLD / conversionFactor))
        {
            onRefresh();
        }

        setDistance(0);

    }, [onRefresh]);

    const bindEvents = () =>
    {
        const container = containerRef.current;

        if (container === null) return;

        container.addEventListener('touchstart', handleStart);
        container.addEventListener('touchmove', handleMove);
        container.addEventListener('touchend', handleEnd);

        return () => 
        {
            container.removeEventListener('touchstart', handleStart);
            container.removeEventListener('touchmove', handleMove);
            container.removeEventListener('touchend', handleEnd);
        };
    };

    useEffect(bindEvents, [containerRef, handleEnd, handleMove, handleStart]);

    return [containerRef, distance, atThreshold] as const;
}
