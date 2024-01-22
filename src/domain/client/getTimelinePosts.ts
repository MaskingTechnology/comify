
import Post from './views/Post';

import { posts } from './dummydata';

export default async function getTimelinePosts(): Promise<Post[]>
{
    return posts;
}
