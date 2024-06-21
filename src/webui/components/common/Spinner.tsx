
import { Panel, Row, Spinner } from '^/webui/designsystem';

type Props = {
    readonly active?: boolean;
};

export default function Component({ active = true }: Props)
{
    return <Panel type='transparent' padding='large'>
        <Row alignX='center'>
            <Spinner active={active} />
        </Row>
    </Panel>;
}
