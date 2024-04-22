
import type RelationView from '../../../domain/relation/view/RelationView';
import { Panel } from '../../designsystem/module';
import Counters from './Counters';

export type Props = {
    relation: RelationView;
    followHandler: () => Promise<void>;
    profileHandler: () => void;
};

export default function Component({ relation, followHandler, profileHandler }: Props)
{
    return <Panel>
        <Counters relation={relation} followHandler={followHandler} profileHandler={profileHandler} />
    </Panel>;
}
