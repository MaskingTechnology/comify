
import { type RatingKey, type RatingId } from '../definitions';

import retrieve from './retrieve';
import createMap from './createMap';

export default async function (keys: RatingKey[]): Promise<Map<RatingId, boolean>>
{
    const records = await retrieve(keys);

    return createMap(keys, records);
}
