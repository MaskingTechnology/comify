
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Panel } from '^/webui/designsystem';

import Counters from './Counters';

type Props = {
    readonly relation: RelationView;
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
