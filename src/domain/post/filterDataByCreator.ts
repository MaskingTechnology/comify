
import type PostData from './PostData';

import { posts } from '../dummydata';

export default async function filterDataByCreator(creatorIds: string[]): Promise<PostData[]>
{
    return Array.from(posts.values());
}
