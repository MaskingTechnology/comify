
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { ClickArea, Column, Panel } from '^/webui/designsystem';

import Comic from '../comic/Image';
import Comment from '../comment/Comment';
import TimeElapsed from '../relation/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

type Props = {
    readonly post: AggregatedPostData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onContentClick: (post: AggregatedPostData) => void;
    readonly onRatingClick: (post: AggregatedPostData) => Promise<boolean>;
    readonly onReactionClick: (post: AggregatedPostData) => void;
};

export default function Component({ post, onFollowClick, onCreatorClick, onContentClick, onRatingClick, onReactionClick }: Props)
{
    return <Panel padding='medium'>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={post.createdAt}
                relation={post.creator}
                onFollowClick={onFollowClick}
                onCreatorClick={onCreatorClick}
            />
            <ClickArea onClick={() => onContentClick(post)}>
                {post.comic !== undefined && <Comic comic={post.comic} />}
                {post.comment !== undefined && <Comment text={post.comment.message} />}
            </ClickArea>
            <EngagementsRow
                isRated={post.hasRated}
                ratingCount={post.metrics.ratings}
                reactionCount={post.metrics.reactions}
                onRatingClick={() => onRatingClick(post)}
                onReactionClick={() => onReactionClick(post)}
            />
        </Column>
    </Panel>;
}
