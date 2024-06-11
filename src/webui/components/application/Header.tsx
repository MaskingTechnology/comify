
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { Row } from '^/webui/designsystem';

import CreatorIdentity from '../creator/ConciseIdentity';

import LogoutButton from './LogoutButton';

import Logo from './Logo';

type Props = {
    readonly identity: CreatorView;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <Logo size='small' />
        <Row gap='small' alignY='center'>
            <CreatorIdentity creator={identity} />
            <LogoutButton onLogout={onLogout} />
        </Row>
    </Row>;
}
