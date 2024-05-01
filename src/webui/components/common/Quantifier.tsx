
import { Text } from '^/webui/designsystem';

import CompactNumber from './CompactNumber';

export type Props = {
    value: number;
    text: string;
};

export default function Component({ value, text }: Props)
{
    return <span>
        <CompactNumber value={value} weight='bold' />
        &nbsp;
        <Text value={text} size='small' />
    </span>;
}
