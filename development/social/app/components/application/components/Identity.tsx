
import { Row } from '@maskingtech/designsystem';

import type { Creator } from '^/domain/creator';

import { FullIdentity } from '~/components/creator';
import LogoutButton from './LogoutButton';

type Props = {
    readonly identity: Creator;
    readonly onLogout: () => void;
};

export default function ({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <FullIdentity creator={identity} />
        <LogoutButton onLogout={onLogout} />
    </Row>;
}
