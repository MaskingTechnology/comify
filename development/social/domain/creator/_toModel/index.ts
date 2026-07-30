
import { type Record, type Creator } from '../definitions';

import getReferences from './getReferences';
import createModel from './createModel';

export default async function (record: Record): Promise<Creator>
{
    const references = await getReferences(record);

    return createModel(record, references);
}
