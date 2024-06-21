
import { Row, Text } from '^/webui/designsystem';

export type Props = {
    readonly readyToRefresh: boolean;
};

export default function Component({ readyToRefresh }: Props)
{
    return <Row alignX='center' alignY='center'>
        {readyToRefresh && <Text value='Release to refresh...' size='small' />}
    </Row>;
}
