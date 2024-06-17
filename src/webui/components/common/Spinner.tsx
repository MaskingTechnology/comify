
import { Panel, Row, Spinner } from '^/webui/designsystem';

export default function Component()
{
    return <Panel type='transparent' padding='large'>
        <Row alignX='center'>
            <Spinner />
        </Row>
    </Panel>;
}
