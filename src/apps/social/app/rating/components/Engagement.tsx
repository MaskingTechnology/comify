
import { ClickArea, Row } from '@maskingtech/designsystem';

import { CompactNumber } from '~/app/common';

import Icon from './elements/Icon';
import type { EngageHandler } from './hooks/useEngagement';
import useEngagement from './hooks/useEngagement';

type Props = {
    readonly isEngaged: boolean;
    readonly count: number;
    readonly onClick: EngageHandler;
};

export default function Component({ isEngaged, count, onClick }: Props)
{
    const [isRated, ratingCount, handleClick] = useEngagement(isEngaged, count, onClick);

    return <ClickArea onClick={handleClick}>
        <Row gap='small' alignX='left' alignY='center'>
            <Icon isRated={isRated} />
            <CompactNumber value={ratingCount} />
        </Row>
    </ClickArea>;
}
