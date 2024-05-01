
import type RelationView from '^/domain/relation/view/RelationView';

import { Panel } from '^/webui/designsystem';

import Counters from './Counters';

export type Props = {
    relation: RelationView;
    onFollowClick: () => Promise<void>;
    onEditClick?: () => void;
    onCreatorClick: () => void;
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
