
import type PostView from '^/domain/post/view/PostView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem/module';

import NoResults from '../common/NoResults';
import LargePanel from './LargePanel';

export type Props = {
    posts: PostView[];
    onFollowClick: (relation: RelationView) => Promise<void>;
    onCreatorClick: (relation: RelationView) => void;
    onComicClick: (post: PostView) => void;
    onRatingClick: (post: PostView) => Promise<boolean>;
    onReactionClick: (post: PostView) => void;
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
