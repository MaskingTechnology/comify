
import type PostView from '../../../domain/post/view/PostView';
import { Grid } from '../../designsystem/module';
import NoResults from '../common/NoResults';
import SmallPanel from './SmallPanel';

export type Props = {
    posts: PostView[];
};

export default function Component({ posts }: Props)
{
    if (posts.length === 0)
    {
        return <NoResults />;
    }

    return <Grid layout='two-columns' gap='medium'>
        {
            posts.map(post => <SmallPanel key={post.id} post={post} />)
        }
    </Grid>;
}
