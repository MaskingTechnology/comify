
import { ClickArea, Column } from '../../../designsystem/module';
import CountersRow from './CountersRow';
import NamesRow from './NamesRow';

export type Props = {
    fullName: string;
    nickname: string;
    postCount: number;
    followerCount: number;
    followingCount: number;
    profileHandler: () => void;
};

export default function Component({ fullName, nickname, postCount, followerCount, followingCount, profileHandler }: Props)
{
    return <Column gap='small' alignY='justify' alignX='stretch'>
        <ClickArea clickHandler={profileHandler}>
            <NamesRow fullName={fullName} nickname={nickname} />
        </ClickArea>
        <CountersRow postCount={postCount} followerCount={followerCount} followingCount={followingCount} />
    </Column>;
}
