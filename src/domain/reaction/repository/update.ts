
import database from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToUpdate from './mapToUpdate';

export default async function update(data: ReactionData): Promise<void>
{
    const record = mapToUpdate(data);

    await database.updateRecord(RECORD_TYPE, data.id, record);
}
