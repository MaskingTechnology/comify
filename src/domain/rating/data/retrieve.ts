
import type Requester from '../../authentication/Requester';

import RatingData from './RatingData';

export default async function retrieve(id: string, requester?: Requester): Promise<RatingData>
{
    return new RatingData(id, '0', '0', undefined);
}
