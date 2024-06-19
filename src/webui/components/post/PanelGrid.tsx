
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { Grid } from '^/webui/designsystem';

import SmallPanel from './SmallPanel';

type Props = {
    readonly posts: PostView[];
    readonly onComicClick: (post: PostView) => void;
    readonly onRatingClick: (post: PostView) => Promise<boolean>;
    readonly onReactionClick: (post: PostView) => void;
};

export default function Component({ posts, onComicClick, onRatingClick, onReactionClick }: Props)
{
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
