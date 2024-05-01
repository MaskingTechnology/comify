
import type PostView from '^/domain/post/view/PostView';

import { Grid } from '^/webui/designsystem';

import NoResults from '../common/NoResults';
import SmallPanel from './SmallPanel';

export type Props = {
    posts: PostView[];
    onComicClick: (post: PostView) => void;
    onRatingClick: (post: PostView) => Promise<boolean>;
    onReactionClick: (post: PostView) => void;
};

export default function Component({ posts, onComicClick, onRatingClick, onReactionClick }: Props)
{
    if (posts.length === 0)
    {
        return <NoResults />;
    }

    return <Grid layout='two-columns' gap='medium'>
        {
            posts.map(post => <SmallPanel
                key={post.id}
                post={post}
                onComicClick={() => onComicClick(post)}
                onRatingClick={() => onRatingClick(post)}
                onReactionClick={() => onReactionClick(post)}
            />)
        }
    </Grid>;
}
