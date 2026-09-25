
import { type Record, type Comic } from '../definitions';

import createModels from './createModels';
import getImages from './getImages';

export default async function (records: Record[]): Promise<Map<string, Comic>>
{
    if (records.length === 0)
    {
        return new Map();
    }

    const imageMap = await getImages(records);

    return createModels(records, imageMap);
}
