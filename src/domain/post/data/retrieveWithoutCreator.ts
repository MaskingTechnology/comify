
import type PostData from './PostData';

import { posts } from '../../dummydata';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function retrieveWithoutCreator(...creatorIds: string[]): Promise<PostData[]>
{
    return Array.from(posts.values());
}
