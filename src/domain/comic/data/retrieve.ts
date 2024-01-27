
import type ComicData from './ComicData';

import { comics } from '../../dummydata';

export default async function retrieve(id: string): Promise<ComicData>
{
    return comics.get(id) as ComicData;
}
