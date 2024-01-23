
import PostData from './PostData';

import { posts } from '../dummydata';

export default async function retrieveData(id: string): Promise<PostData>
{
    return posts.get(id) as PostData;
}
