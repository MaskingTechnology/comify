
import { Panel, Row, Spinner } from '@maskingtech/designsystem';

type Props = {
    readonly active?: boolean;
};

export default function ({ active }: Props)
{
    return <Panel type='transparent' padding='large'>
        <Row alignX='center'>
            <Spinner active={active} />
        </Row>
    </Panel>;
}
