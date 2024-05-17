
import database from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToInsert from './mapToInsert';

export default async function create(data: ReactionData): Promise<string>
{
    const record = mapToInsert(data);

    return database.createRecord(RECORD_TYPE, record);
}
