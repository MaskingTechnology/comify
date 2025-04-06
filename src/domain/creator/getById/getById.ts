
import database, { RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

type Props = {
    tenantId: string,
    id: string;
};

export default async function getById({ id, tenantId }: Props): Promise<DataModel>
{
    const query: RecordQuery =
    {
        id: { 'EQUALS': id },
        tenantId: { 'EQUALS': tenantId }
    };

    const creators = await database.findRecord(RECORD_TYPE, query);

    if (creators === undefined) throw new Error('No creator found with that ID');

    return creators as DataModel;
}
