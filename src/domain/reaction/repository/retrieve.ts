
import database from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import mapRecord from './mapFrom';

export default async function retrieve(id: string): Promise<ReactionData>
{
    const record = await database.readRecord(RECORD_TYPE, id);

    return mapRecord(record);
}
