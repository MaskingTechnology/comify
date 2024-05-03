
import { Row } from '^/webui/designsystem';

import Quantifier from '../../common/Quantifier';

export type Props = {
    readonly postCount: number;
    readonly followerCount: number;
    readonly followingCount: number;
};

export default function Component({ postCount, followerCount, followingCount }: Props)
{
    return <Row>
        <Quantifier value={postCount} text='comics' />
        <Quantifier value={followerCount} text='followers' />
        <Quantifier value={followingCount} text='following' />
    </Row>;
}
