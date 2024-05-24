
import database from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly imageId: string;
    readonly structure?: string;
};

export default async function insert(imageId: string, structure?: string): Promise<Data>
{
    const id = generateId();

    const record: Data = { id, imageId, structure };

    await database.createRecord(RECORD_TYPE, record);

    return record;
}
