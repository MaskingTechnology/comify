
import { Panel, Paragraph, Title } from '@maskingtech/designsystem';

import Login from './Login';

type Props = {
    readonly error: unknown;
};

export default function ErrorHandler({ error }: Props)
{
    const isUnauthorized = error?.constructor?.name === 'Unauthorized'
        || error === 'Invalid authorization type'
        || error === 'Invalid authorization key'
        || error === 'Session expired';

    const ErrorPanel = <Panel type='normal'>
        <Title>Oops...</Title>
        <Paragraph>An unexpected error occurred. Please try again!</Paragraph>
    </Panel>;

    return isUnauthorized ? <Login /> : ErrorPanel;
}
