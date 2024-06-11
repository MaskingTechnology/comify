
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { Row } from '^/webui/designsystem';

import CreatorIdentity from '../creator/ConciseIdentity';

import Logo from './Logo';

type Props = {
    readonly identity: CreatorView;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <Logo size='small' />
        <CreatorIdentity creator={identity} />
    </Row>;
}
