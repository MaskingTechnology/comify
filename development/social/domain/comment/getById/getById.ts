
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

import CommentNotFound from './CommentNotFound';

export default async function getById(id: string): Promise<DataModel>
{
    const record = await database.readRecord(RECORD_TYPE, { id: { EQUALS: id } });

    if (record === undefined)
    {
        logger.warn(`Comment with id '${id}' could not be found.`);

        throw new CommentNotFound();
    }

    return record as DataModel;
}
