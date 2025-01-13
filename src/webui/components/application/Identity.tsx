
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import { Row } from '^/webui/designsystem';

import CreatorIdentity from '../creator/FullIdentity';

import LogoutButton from './LogoutButton';

type Props = {
    readonly identity: AggregatedCreatorData;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <CreatorIdentity creator={identity} />
        <LogoutButton onLogout={onLogout} />
    </Row>;
}
