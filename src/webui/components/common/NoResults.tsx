
import { Panel, Row, Text } from '../../designsystem/module';


export default function Component()
{
    return <Panel type='transparent'>
        <Row alignX='center'>
            <Text value='We have searched our database, but we could not find anything.' type='secondary' />
        </Row>
    </Panel>;
}
