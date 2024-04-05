
import type PostView from '../../../domain/post/view/PostView';
import { Column, Panel, Row } from '../../designsystem/module';
import Comic from '../comic/Image';
import TimeElapsed from '../common/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
    rateHandler: () => Promise<boolean>;
};

export default function Component({ post, rateHandler }: Props)
{
    return <Panel padding='small'>
        <Column gap='small' alignX='stretch'>
            <Comic comic={post.comic} />
            <Row alignX='justify'>
                <EngagementsRow isRated={post.hasRated} ratingCount={post.ratingCount} reactionCount={post.reactionCount} rateHandler={rateHandler} />
                <TimeElapsed date={post.createdAt} />
            </Row>
        </Column>
    </Panel>;
}
