
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import { DataModel } from '../types';

type Data = Partial<Omit<DataModel, 'id'>>;

export default async function feature(id: string, data: Data): Promise<void>
{
    return database.updateRecord(RECORD_TYPE, id, data);
}
