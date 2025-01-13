
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { Grid } from '^/webui/designsystem';

import SmallPanel from './SmallPanel';

type Props = {
    readonly posts: AggregatedPostData[];
    readonly onComicClick: (post: AggregatedPostData) => void;
    readonly onRatingClick: (post: AggregatedPostData) => Promise<boolean>;
    readonly onReactionClick: (post: AggregatedPostData) => void;
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
