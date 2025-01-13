
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column } from '^/webui/designsystem';

import LargePanel from './LargePanel';

type Props = {
    readonly posts: AggregatedPostData[];
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onComicClick: (post: AggregatedPostData) => void;
    readonly onRatingClick: (post: AggregatedPostData) => Promise<boolean>;
    readonly onReactionClick: (post: AggregatedPostData) => void;
};

export default function Component({ posts, onFollowClick, onCreatorClick, onComicClick, onRatingClick, onReactionClick }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            posts.map(post =>
                <LargePanel
                    key={post.id}
                    post={post}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                    onComicClick={onComicClick}
                    onRatingClick={onRatingClick}
                    onReactionClick={onReactionClick}
                />
            )
        }
    </Column>;
}
