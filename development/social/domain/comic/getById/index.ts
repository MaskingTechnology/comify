
import { type Comic } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieveById';

export default async function run(id: string): Promise<Comic>
{
    const record = await retrieve(id);

    return toModel(record);
}
