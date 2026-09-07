
import { type Identifier } from '@comify/common/primitives/identifier';

import toModels from '../_toModels';
import { type Comment } from '../definitions';
import { logger } from '../integrations';

import retrieve from './retrieve';

export default async function (ids: Identifier[]): Promise<Map<Identifier, Comment>>
{
    const records = await retrieve(ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all comments were retrieved');
    }

    return toModels(records);
}
