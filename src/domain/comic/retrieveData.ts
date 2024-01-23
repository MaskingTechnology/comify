
import ComicData from './ComicData';

import { comics } from '../dummydata';

export default async function retrieveData(id: string): Promise<ComicData>
{
    return comics.get(id) as ComicData;
}
