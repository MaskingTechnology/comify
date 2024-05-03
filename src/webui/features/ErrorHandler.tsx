
import { Panel, Paragraph, Title } from '^/webui/designsystem';

import Login from './Login';

export type Props = {
    readonly error: unknown;
};

export default function Feature({ error }: Props)
{
    const isUnauthorized = error?.constructor?.name === 'Unauthorized';

    const ErrorPanel = <Panel type='normal'>
        <Title>Oops...</Title>
        <Paragraph>An unexpected error occurred. Please try again!</Paragraph>
    </Panel>;

    return isUnauthorized ? <Login /> : ErrorPanel;
}
