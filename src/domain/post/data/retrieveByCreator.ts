
import type PostData from './PostData';

import { posts } from '../../dummydata';

export default async function retrieveByCreator(...creatorIds: string[]): Promise<PostData[]>
{
    return Array.from(posts.values());
}
