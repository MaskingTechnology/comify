
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { ClickArea, Column, Panel, Row } from '^/webui/designsystem';

import Comic from '../comic/Image';
import Comment from '../comment/Comment';
import TimeElapsed from '../common/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

type Props = {
    readonly post: AggregatedPostData;
    readonly onContentClick: () => void;
    readonly onRatingClick: () => Promise<boolean>;
    readonly onReactionClick: () => void;
};

export default function Component({ post, onContentClick, onRatingClick, onReactionClick }: Props)
{
    return <Panel padding='small'>
        <Column gap='small' alignX='stretch'>
            <ClickArea onClick={onContentClick}>
                {post.comic !== undefined && <Comic comic={post.comic} />}
                {post.comment !== undefined && <Comment text={post.comment.message} />}
            </ClickArea>
            <Row alignX='justify'>
                <EngagementsRow
                    isRated={post.isRated}
                    ratingCount={post.metrics.ratings}
                    reactionCount={post.metrics.reactions}
                    onRatingClick={onRatingClick}
                    onReactionClick={onReactionClick}
                />
                <TimeElapsed date={post.createdAt} />
            </Row>
        </Column>
    </Panel>;
}
