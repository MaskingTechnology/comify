import { TouchEvent, useRef, useState } from 'react';

export type Props = {
    readonly onRefresh: () => void;
    readonly children: React.ReactNode;
};

export default function Component({ onRefresh, children }: Props)
{
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragDistance, setDragDistance] = useState<number>(0);
    const startY = useRef<number>(0);

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) =>
    {
        startY.current = event.touches[0].clientY;

        setIsDragging(true);

        event.preventDefault();
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) =>
    {
        if (!isDragging) return;

        const currentY = event.touches[0].clientY;
        const distance = currentY - startY.current;

        event.preventDefault();

        if (distance > 0)
        {
            setDragDistance(distance);
        }
    };

    const handleTouchEnd = () =>
    {
        if (dragDistance > 100)
        {
            //onRefresh();
        }

        setIsDragging(false);
        setDragDistance(0);
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ overflow: 'hidden', position: 'relative', touchAction: 'none' }}
        >
            <div
                style={{
                    transform: `translateY(${dragDistance}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
            >
                {dragDistance > 100 && <div className="refresh-indicator">Refreshing...</div>}
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
