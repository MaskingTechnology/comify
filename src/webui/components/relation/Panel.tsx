
import type RelationView from '^/domain/relation/view/RelationView';

import { Panel } from '^/webui/designsystem/module';

import Counters from './Counters';

export type Props = {
    relation: RelationView;
    followHandler: () => Promise<void>;
    profileHandler: () => void;
    editHandler: () => void;
};

export default function Component({ relation, followHandler, profileHandler, editHandler }: Props)
{
    return <Panel>
        <Counters relation={relation} followHandler={followHandler} profileHandler={profileHandler} editHandler={editHandler} />
    </Panel>;
}
