
import type Requester from '../../authentication/Requester';

import ReactionData from './ReactionData';

export default async function retrieve(id: string, requester?: Requester): Promise<ReactionData>
{
    return new ReactionData(id, '0', '0', undefined);
}
