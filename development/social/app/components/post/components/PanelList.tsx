
import { Column } from '@maskingtech/designsystem';

import { type Post } from '^/domain/post';
import { type Relation } from '^/domain/relation';

import LargePanel from './LargePanel';

type Props = {
    readonly posts: Post[];
    readonly onFollowClick: (relation: Relation) => Promise<void>;
    readonly onCreatorClick: (relation: Relation) => void;
    readonly onContentClick: (post: Post) => void;
    readonly onRatingClick: (post: Post) => Promise<boolean>;
    readonly onReactionClick: (post: Post) => void;
};

export default function ({ posts, onFollowClick, onCreatorClick, onContentClick, onRatingClick, onReactionClick }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            posts.map(post =>
                <LargePanel
                    key={post.id}
                    post={post}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                    onContentClick={onContentClick}
                    onRatingClick={onRatingClick}
                    onReactionClick={onReactionClick}
                />
            )
        }
    </Column>;
}
