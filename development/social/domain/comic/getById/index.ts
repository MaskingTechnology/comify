
import { type Comic } from '../definitions';
import toModel from '../_toModel';
import retrieveById from '../_retrieveById';

export default async function run(id: string): Promise<Comic>
{
    const data = await retrieveById(id);

    return toModel(data);
}
