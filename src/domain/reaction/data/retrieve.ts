
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import type ReactionData from './ReactionData';
import mapRecord from './mapRecord';

export default async function retrieve(id: string): Promise<ReactionData>
{
    const record = await database.readRecord(RECORD_TYPE, id);

    return mapRecord(record);
}
