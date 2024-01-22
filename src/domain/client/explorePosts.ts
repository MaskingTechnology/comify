
import Post from './views/Post';

import { posts } from './dummydata';

export default async function getExplorePosts(): Promise<Post[]>
{
    return posts;
}
