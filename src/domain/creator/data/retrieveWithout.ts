
import CreatorData from './CreatorData';

import { creators } from '../../dummydata';

export default async function retrieveWithout(...ids: string[]): Promise<CreatorData[]>
{
    // This function will filter creators by the given list of ids.
    // Additionally a sort and limit can be applied.

    return Array.from(creators.values());
}
