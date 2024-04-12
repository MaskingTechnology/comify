
import type PostView from '../../../domain/post/view/PostView';
import { Grid } from '../../designsystem/module';
import NoResults from '../common/NoResults';
import SmallPanel from './SmallPanel';

export type Props = {
    posts: PostView[];
    rateHandler: (post: PostView) => Promise<boolean>;
    reactionHandler: (post: PostView) => void;
};

export default function Component({ posts, rateHandler, reactionHandler }: Props)
{
    if (posts.length === 0)
    {
        return <NoResults />;
    }

    return <Grid layout='two-columns' gap='medium'>
        {
            posts.map(post => <SmallPanel key={post.id} post={post} rateHandler={() => rateHandler(post)} reactionHandler={() => reactionHandler(post)} />)
        }
    </Grid>;
}
