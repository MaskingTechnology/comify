
import { Grid } from '@maskingtech/designsystem';

import { type Post } from '^/domain/post';

import SmallPanel from './SmallPanel';

type Props = {
    readonly posts: Post[];
    readonly onContentClick: (post: Post) => void;
    readonly onRatingClick: (post: Post) => Promise<boolean>;
    readonly onReactionClick: (post: Post) => void;
};

export default function ({ posts, onContentClick, onRatingClick, onReactionClick }: Props)
{
    return <Grid layout='two-columns' gap='medium'>
        {
            posts.map(post => <SmallPanel
                key={post.id}
                post={post}
                onContentClick={() => onContentClick(post)}
                onRatingClick={() => onRatingClick(post)}
                onReactionClick={() => onReactionClick(post)}
            />)
        }
    </Grid>;
}
