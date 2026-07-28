
import type { Post } from '^/domain/post';
import type { Relation } from '^/domain/relation';

import { ClickArea, Column, Panel } from '@maskingtech/designsystem';

import { Image as Comic } from '~/components/post.comic';
import { Comment } from '~/components/post.comment';
import { TimeElapsed } from '~/components/relation';

import EngagementsRow from './elements/EngagementRow';

type Props = {
    readonly post: Post;
    readonly onFollowClick: (relation: Relation) => Promise<void>;
    readonly onCreatorClick: (relation: Relation) => void;
    readonly onContentClick: (post: Post) => void;
    readonly onRatingClick: (post: Post) => Promise<boolean>;
    readonly onReactionClick: (post: Post) => void;
};

export default function ({ post, onFollowClick, onCreatorClick, onContentClick, onRatingClick, onReactionClick }: Props)
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
                isRated={post.isRated}
                ratingCount={post.metrics.ratings}
                reactionCount={post.metrics.reactions}
                onRatingClick={() => onRatingClick(post)}
                onReactionClick={() => onReactionClick(post)}
            />
        </Column>
    </Panel>;
}
