
import { type RatingKey } from '../definitions';

import retrieve from './retrieve';

export default async function run(key: RatingKey): Promise<boolean>
{
    const record = await retrieve(key);

    return record !== undefined;
}
