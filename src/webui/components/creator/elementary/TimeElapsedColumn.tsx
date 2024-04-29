
import { Column, Text } from '^/webui/designsystem/module';

import TimeElapsed from '../../common/TimeElapsed';

export type Props = {
    fullName: string;
    date: Date;
};

export default function Component({ fullName, date }: Props)
{
    return <Column alignY='justify' gap='none'>
        <Text value={fullName} size='medium' weight='bold' />
        <TimeElapsed date={date} size='small' />
    </Column>;
}
