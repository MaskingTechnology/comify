
import type { Creator } from '../definitions';
import toModel from '../_toModel';
import retrieveById from '../_retrieveById';

export default async function run(tenantId: string, id: string): Promise<Creator>
{
    const record = await retrieveById(tenantId, id);

    return toModel(record);
}
