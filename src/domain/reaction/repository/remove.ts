
import database from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToDeleteRecord';

export default async function remove(reaction: ReactionData): Promise<void>
{
    const data = mapToRecord(reaction);

    return database.updateRecord(RECORD_TYPE, reaction.id, data);
}
