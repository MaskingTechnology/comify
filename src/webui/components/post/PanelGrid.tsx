
import type PostView from '^/domain/post/view/PostView';

import { Grid } from '^/webui/designsystem/module';

import NoResults from '../common/NoResults';
import SmallPanel from './SmallPanel';

export type Props = {
    posts: PostView[];
    comicHandler: (post: PostView) => void;
    rateHandler: (post: PostView) => Promise<boolean>;
    reactionHandler: (post: PostView) => void;
};

export default function Component({ posts, comicHandler, rateHandler, reactionHandler }: Props)
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
                comicHandler={() => comicHandler(post)}
                rateHandler={() => rateHandler(post)}
                reactionHandler={() => reactionHandler(post)}
            />)
        }
    </Grid>;
}
