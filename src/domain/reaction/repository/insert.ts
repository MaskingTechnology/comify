
import database from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToNewRecord';

export default async function create(data: ReactionData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
