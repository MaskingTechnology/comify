
import { type RatingKey, type RatingId } from '../definitions';

import createMap from './createMap';
import retrieve from './retrieve';

export default async function (keys: RatingKey[]): Promise<Map<RatingId, boolean>>
{
    const records = await retrieve(keys);

    return createMap(keys, records);
}
