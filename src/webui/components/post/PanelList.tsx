
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem';

import NoResults from '../common/NoResults';
import LargePanel from './LargePanel';

type Props = {
    readonly posts: PostView[];
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onComicClick: (post: PostView) => void;
    readonly onRatingClick: (post: PostView) => Promise<boolean>;
    readonly onReactionClick: (post: PostView) => void;
};

export default function Component({ posts, onFollowClick, onCreatorClick, onComicClick, onRatingClick, onReactionClick }: Props)
{
    if (posts.length === 0)
    {
        return <NoResults />;
    }

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
