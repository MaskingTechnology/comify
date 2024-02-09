
import { Column } from '../../../designsystem/module';
import CountersRow from './CountersRow';
import NamesRow from './NamesRow';

export type Props = {
    fullName: string;
    nickname: string;
    postCount: number;
    followerCount: number;
    followingCount: number;
};

export default function Component({ fullName, nickname, postCount, followerCount, followingCount }: Props)
{
    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow fullName={fullName} nickname={nickname} />
        <CountersRow postCount={postCount} followerCount={followerCount} followingCount={followingCount} />
    </Column>;
}
