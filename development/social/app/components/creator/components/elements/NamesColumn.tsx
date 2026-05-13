
import { Column, Text } from '@maskingtech/designsystem';

type Props = {
    readonly fullName: string;
    readonly nickname: string;
};

export default function Component({ fullName, nickname }: Props)
{
    return <Column gap='none'>
        <Text value={fullName} size='medium' weight='bold' />
        <Text value={'@' + nickname} type='secondary' size='small' />
    </Column>;
}
