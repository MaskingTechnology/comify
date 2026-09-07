
import { type Identifier } from '@comify/common/primitives/identifier';

import toModels from '../_toModels';
import { type Comic } from '../definitions';
import { logger } from '../integrations';

import retrieve from './retrieve';

export default async function (ids: Identifier[]): Promise<Map<Identifier, Comic>>
{
    const records = await retrieve(ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all comics were retrieved');
    }

    return toModels(records);
}
