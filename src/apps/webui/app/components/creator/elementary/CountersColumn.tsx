
import { ClickArea, Column } from '@maskingtech/designsystem';

import CountersRow from './CountersRow';
import NamesRow from './NamesRow';

type Props = {
    readonly fullName: string;
    readonly nickname: string;
    readonly postCount: number;
    readonly followerCount: number;
    readonly followingCount: number;
    readonly onNameClick: () => void;
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
