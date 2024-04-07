
import { useState } from 'react';
import { Row } from '../../designsystem/module';
import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';

export type Props = {
    isEngaged: boolean;
    count: number;
    rateHandler: () => Promise<boolean>;
};

export default function Component({ isEngaged, count, rateHandler }: Props)
{
    const [isRated, setIsRated] = useState<boolean>(isEngaged);
    const [ratingCount, setRatingCount] = useState<number>(count);

    const handleClick = async () =>
    {
        const isRated = await rateHandler();

        isRated
            ? setRatingCount(ratingCount + 1)
            : setRatingCount(ratingCount - 1);

        setIsRated(isRated);
    };

    return <Row gap='small' alignX='left' alignY='center'>
        <Icon isRated={isRated} clickHandler={handleClick} />
        <CompactNumber value={ratingCount} />
    </Row>;
}
