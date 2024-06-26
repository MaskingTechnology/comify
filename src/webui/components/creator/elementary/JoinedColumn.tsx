
import { Column, Text } from '^/webui/designsystem';

import NamesRow from './NamesRow';

type Props = {
    readonly fullName: string;
    readonly nickname: string;
    readonly joinedAt: string;
};

export default function Component({ fullName, nickname, joinedAt }: Props)
{
    const joinedAtDate = new Date(joinedAt);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const joinedText = 'Joined ' + joinedAtDate.toLocaleDateString('en-GB', options);

    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow fullName={fullName} nickname={nickname} />
        <Text value={joinedText} size='small' />
    </Column>;
}
