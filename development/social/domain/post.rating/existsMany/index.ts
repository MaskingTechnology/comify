
import { type RatingKey } from '../definitions';

import retrieve from './retrieve';
import createMap from './createMap';

export default async function (keys: RatingKey[]): Promise<Map<string, boolean>>
{
    const records = await retrieve(keys);

    return createMap(keys, records);
}
