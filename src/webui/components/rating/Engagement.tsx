
import { useState } from 'react';

import { ClickArea, Row } from '^/webui/designsystem/module';

import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';

export type Props = {
    isEngaged: boolean;
    count: number;
    onClick: () => Promise<boolean>;
};

export default function Component({ isEngaged, count, onClick }: Props)
{
    const [isRated, setIsRated] = useState<boolean>(isEngaged);
    const [ratingCount, setRatingCount] = useState<number>(count);

    const handleClick = async () =>
    {
        const isRated = await onClick();

        isRated
            ? setRatingCount(ratingCount + 1)
            : setRatingCount(ratingCount - 1);

        setIsRated(isRated);
    };

    return <ClickArea onClick={handleClick}>
        <Row gap='small' alignX='left' alignY='center'>
            <Icon isRated={isRated} />
            <CompactNumber value={ratingCount} />
        </Row>
    </ClickArea>;
}
