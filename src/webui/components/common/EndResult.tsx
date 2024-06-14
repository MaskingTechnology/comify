
import { Panel, Row, Text } from '^/webui/designsystem';

export default function Component()
{
    return <Panel type='transparent' padding='large'>
        <Row alignX='center' alignY='center' gap='medium'>
            <Text size='large' weight='light' type='secondary' value='The end ...' />
        </Row>
    </Panel>;
}
