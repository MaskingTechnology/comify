
import Creator from './views/Creator';

import { creators } from './dummydata';

export default async function exploreCreators(): Promise<Creator[]>
{
    return creators;
}
