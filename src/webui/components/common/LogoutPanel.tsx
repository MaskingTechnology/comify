
import { Button, Panel, Paragraph, Row } from '^/webui/designsystem';

export type Props = {
    readonly onLogout: () => void;
};

export default function Component({ onLogout }: Props)
{
    return <Panel>
        <Paragraph>
            Are you sure you want to logout?
        </Paragraph>
        <Row alignX='right'>
            <Button text='Yes, log me out' type='primary' onClick={onLogout} />
        </Row>
    </Panel>;
}
