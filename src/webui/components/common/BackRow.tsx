
import { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { Row } from '^/webui/designsystem';

import BackButton from './BackButton';

type Props = {
    readonly reaction: ReactionView;
    readonly onClick: (reaction: ReactionView) => void;
};

export default function Component({ reaction, onClick }: Props)
{
    return <Row alignX='justify' gap='small'>
        <BackButton
            reaction={reaction}
            text={'Back'}
            onClick={onClick}
        />
    </Row>;
}
