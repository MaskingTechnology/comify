
import { useCallback, useEffect, useRef, useState } from 'react';

import { useScrollContainer } from './useScrollContainer';

const MAX_PULL_DISTANCE = 128;
const REFRESH_THRESHOLD = 60;
const RESISTANCE_COEFFICIENT = 0.6;

export default function useRefreshOnPull(displayHeight: number, onRefresh: () => void)
{
    const [childRef, container] = useScrollContainer();
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [distance, setDistance] = useState<number>(0);
    const [atThreshold, setAtThreshold] = useState<boolean>(false);
    const startY = useRef<number>(0);

    const thresholdDistance = displayHeight * REFRESH_THRESHOLD / MAX_PULL_DISTANCE;

    const calculateDistance = useCallback((differenceY: number) =>
    {
        // We use the exponential easing function to calculate the distance the user has pulled the container.

        const decay = Math.exp((-RESISTANCE_COEFFICIENT * differenceY) / MAX_PULL_DISTANCE);

        return (1 - decay) * displayHeight;

    }, [displayHeight]);

    const handleMove = useCallback((event: TouchEvent) =>
    {
        const scrollTop = container?.scrollTop;

        if (scrollTop !== 0) return;

        const currentY = event.touches[0].clientY;
        const dragDistance = currentY - startY.current;

        if (isDragging === false)
        {
            startY.current = event.touches[0].clientY;

            setIsDragging(true);

            return;
        }

        if (dragDistance > 0)
        {
            const distance = calculateDistance(dragDistance);
            const atThreshold = distance > thresholdDistance;

            setDistance(distance);
            setAtThreshold(atThreshold);
        }

    }, [container, isDragging, thresholdDistance, calculateDistance]);

    const handleEnd = useCallback((event: TouchEvent) =>
    {
        if (isDragging === false) return;

        const currentY = event.changedTouches[0].clientY;
        const dragDistance = currentY - startY.current;
        const distance = calculateDistance(dragDistance);

        if (distance > thresholdDistance)
        {
            onRefresh();
        }

        setIsDragging(false);
        setAtThreshold(false);
        setDistance(0);

    }, [isDragging, thresholdDistance, calculateDistance, onRefresh]);

    const bindEvents = () =>
    {
        if (container === undefined) return;

        container.addEventListener('touchmove', handleMove);
        container.addEventListener('touchend', handleEnd);

        return () => 
        {
            container.removeEventListener('touchmove', handleMove);
            container.removeEventListener('touchend', handleEnd);
        };
    };

    useEffect(bindEvents, [container, handleEnd, handleMove]);

    return [childRef, distance, atThreshold] as const;
}
