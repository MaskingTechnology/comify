
import type Requester from '../../authentication/Requester';

import ComicData from './ComicData';

export default async function retrieve(id: string, requester?: Requester): Promise<ComicData>
{
    return new ComicData(id, 'imageId');
}
