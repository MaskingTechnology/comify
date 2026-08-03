
import { Column, Text } from '@maskingtech/designsystem';

import NamesRow from './NamesRow';

type Props = {
    readonly fullName: string;
    readonly nickname: string;
    readonly joinedAt: Date;
};

export default function ({ fullName, nickname, joinedAt }: Props)
{
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const joinedText = 'Joined ' + joinedAt.toLocaleDateString('en-GB', options);

    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow fullName={fullName} nickname={nickname} />
        <Text value={joinedText} size='small' />
    </Column>;
}
