
import type { Relation } from '^/domain/relation';

import { Panel } from '@maskingtech/designsystem';

import Counters from './Counters';

type Props = {
    readonly relation: Relation;
    readonly onFollowClick: () => Promise<void>;
    readonly onEditClick?: () => void;
    readonly onCreatorClick: () => void;
};

export default function ({ relation, onFollowClick, onEditClick, onCreatorClick }: Props)
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
