
import CreatorData from './CreatorData';

import { creators } from '../dummydata';

export default async function retrieve(id: string): Promise<CreatorData>
{
    return creators.get(id) as CreatorData;
}
