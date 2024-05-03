
import type RelationView from '^/domain/relation/view/RelationView';

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
    return <Panel>
        <Counters
            relation={relation}
            onFollowClick={onFollowClick}
            onEditClick={onEditClick}
            onCreatorClick={onCreatorClick}
        />
    </Panel>;
}
