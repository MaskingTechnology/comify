
import { Row } from '@maskingtech/designsystem';

import type { AggregatedData as IdentityModel } from '^/domain/creator/aggregate';

import { ConciseIdentity } from '~/app/creator';

import Logo from './Logo';
import LogoutButton from './LogoutButton';

type Props = {
    readonly identity: IdentityModel;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <Logo size='small' />
        <Row gap='small' alignY='center'>
            <ConciseIdentity creator={identity} />
            <LogoutButton onLogout={onLogout} />
        </Row>
    </Row>;
}
