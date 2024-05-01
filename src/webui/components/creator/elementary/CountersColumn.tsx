
import { ClickArea, Column } from '^/webui/designsystem/module';

import CountersRow from './CountersRow';
import NamesRow from './NamesRow';

export type Props = {
    fullName: string;
    nickname: string;
    postCount: number;
    followerCount: number;
    followingCount: number;
    onNameClick: () => void;
};

export default function Component({ fullName, nickname, postCount, followerCount, followingCount, onNameClick }: Props)
{
    return <Column gap='small' alignY='justify' alignX='stretch'>
        <ClickArea onClick={onNameClick}>
            <NamesRow fullName={fullName} nickname={nickname} />
        </ClickArea>
        <CountersRow postCount={postCount} followerCount={followerCount} followingCount={followingCount} />
    </Column>;
}
