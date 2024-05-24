
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly imageId: string;
    readonly structure?: string;
};

export default async function retrieve(id: string): Promise<Data>
{
    return database.readRecord(RECORD_TYPE, id) as Promise<Data>;
}
