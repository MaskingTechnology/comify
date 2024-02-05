
import PostData from './PostData';

export default async function retrieve(id: string): Promise<PostData>
{
    return new PostData(id, 'creatorId', 'comicId');
}
