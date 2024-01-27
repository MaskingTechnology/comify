
import PostData from './PostData';

import { posts } from '../../dummydata';

export default async function retrieve(id: string): Promise<PostData>
{
    return posts.get(id) as PostData;
}
