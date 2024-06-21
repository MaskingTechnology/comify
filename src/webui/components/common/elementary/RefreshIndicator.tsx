
import { Row } from '^/webui/designsystem';

import Spinner from '../Spinner';

export type Props = {
    readonly readyToRefresh: boolean;
};

export default function Component({ readyToRefresh }: Props)
{
    return <Row alignX='center' alignY='top'>
        <Spinner active={readyToRefresh} />
    </Row>;
}
