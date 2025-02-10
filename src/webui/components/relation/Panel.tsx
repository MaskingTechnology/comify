
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Panel } from '^/webui/designsystem';

import Counters from './Counters';

type Props = {
    readonly relation: AggregatedRelationData;
    readonly onFollowClick: () => Promise<void>;
    readonly onEditClick?: () => void;
    readonly onCreatorClick: () => void;
};

export default function Component({ relation, onFollowClick, onEditClick, onCreatorClick }: Props)
{
    return <Panel padding='medium'>
        <Counters
            relation={relation}
            onFollowClick={onFollowClick}
            onEditClick={onEditClick}
            onCreatorClick={onCreatorClick}
        />
    </Panel>;
}
