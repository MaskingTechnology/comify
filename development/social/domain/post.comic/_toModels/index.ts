
import { type Record, type Comic } from '../definitions';

import getImages from './getImages';
import createModels from './createModels';

export default async function (records: Record[]): Promise<Map<string, Comic>>
{
    if (records.length === 0)
    {
        return new Map();
    }

    const imageMap = await getImages(records);

    return createModels(records, imageMap);
}
