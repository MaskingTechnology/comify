
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column, Panel, Row } from '@maskingtech/designsystem';

import { RemoveOption } from '~/components/common';
import { Image as Comic } from '~/components/comic';
import { Comment } from '~/components/comment';
import { TimeElapsed } from '~/components/relation';

import EngagementRow from './elements/EngagementRow';

type Props = {
    readonly post: AggregatedPostData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onRatingClick: (post: AggregatedPostData) => Promise<boolean>;
    readonly onDeleteClick: (post: AggregatedPostData) => Promise<void>;
    readonly onReactionClick: (post: AggregatedPostData) => void;
};

export default function Component({ post, onFollowClick, onCreatorClick, onRatingClick, onReactionClick, onDeleteClick }: Props)
{
    return <Panel padding='medium'>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={post.createdAt}
                relation={post.creator}
                onFollowClick={() => onFollowClick(post.creator)}
                onCreatorClick={() => onCreatorClick(post.creator)}
            />
            {post.comic !== undefined && <Comic comic={post.comic} />}
            {post.comment !== undefined && <Comment text={post.comment.message} />}
            <Row alignX='justify'>
                <EngagementRow
                    isRated={post.isRated}
                    ratingCount={post.metrics.ratings}
                    reactionCount={post.metrics.reactions}
                    onRatingClick={() => onRatingClick(post)}
                    onReactionClick={() => onReactionClick(post)}
                />
                {
                    post.creator.self
                        ? <RemoveOption onClick={() => onDeleteClick(post)} />
                        : null
                }
            </Row>
        </Column>
    </Panel>;
}
