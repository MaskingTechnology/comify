
import type Requester from '../../authentication/Requester';

import type PostData from './PostData';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function retrieveWithoutCreators(creatorIds: string[], requester?: Requester): Promise<PostData[]>
{
    return [];
}
