
import database from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToDelete from './mapToDelete';

export default async function remove(reaction: ReactionData): Promise<void>
{
    const data = mapToDelete(reaction);

    return database.updateRecord(RECORD_TYPE, reaction.id, data);
}
