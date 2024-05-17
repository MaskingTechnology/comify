
import database from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToUpdateRecord';

export default async function update(data: ReactionData): Promise<void>
{
    const record = mapToRecord(data);

    return database.updateRecord(RECORD_TYPE, data.id, record);
}
