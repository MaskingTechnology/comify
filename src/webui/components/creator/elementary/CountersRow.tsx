
import { Row } from '../../../designsystem/module';
import Quantifier from '../../common/Quantifier';

export type Props = {
    postCount: number;
    followerCount: number;
    followingCount: number;
};

export default function Component({ postCount, followerCount, followingCount }: Props)
{
    return <Row>
        <Quantifier value={postCount} text='comics' />
        <Quantifier value={followerCount} text='followers' />
        <Quantifier value={followingCount} text='following' />
    </Row>;
}
