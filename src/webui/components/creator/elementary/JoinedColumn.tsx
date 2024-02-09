
import { Column, Text } from '../../../designsystem/module';
import NamesRow from './NamesRow';

export type Props = {
    fullName: string;
    nickname: string;
    joinedAt: Date;
};

export default function Component({ fullName, nickname, joinedAt }: Props)
{
    joinedAt ??= new Date();

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const joinedText = 'Joined ' + joinedAt.toLocaleDateString('en-GB', options);

    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow fullName={fullName} nickname={nickname} />
        <Text value={joinedText} size='small' />
    </Column>;
}
