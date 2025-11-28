
import { Text } from '^/webui/designsystem';

import CompactNumber from './CompactNumber';

type Props = {
    readonly value: number;
    readonly text: string;
};

export default function Component({ value, text }: Props)
{
    return <span>
        <CompactNumber value={value} weight='bold' />
        &nbsp;
        <Text value={text} size='small' />
    </span>;
}
