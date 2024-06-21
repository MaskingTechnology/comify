
import { ClickArea, Row } from '^/webui/designsystem';

import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';
import useEngagement from './hooks/useEngagement';

type Props = {
    readonly isEngaged: boolean;
    readonly count: number;
    readonly onClick: () => Promise<boolean>;
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
