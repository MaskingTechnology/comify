
import { type Record, type Creator } from '../definitions';

import createModel from './createModel';
import getReferences from './getReferences';

export default async function (record: Record): Promise<Creator>
{
    const references = await getReferences(record);

    return createModel(record, references);
}
