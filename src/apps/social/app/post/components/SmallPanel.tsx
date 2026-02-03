
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { ClickArea, Column, Panel, Row } from '@maskingtech/designsystem';

import { TimeElapsed } from '~/app/common';
import { Image as Comic } from '~/app/comic';
import { Comment } from '~/app/comment';

import EngagementsRow from './elements/EngagementRow';

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
