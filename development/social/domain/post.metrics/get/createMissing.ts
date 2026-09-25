
import { type Record } from '../definitions';

export default function (postId: string): Record
{
    return { id: '', postId, ratings: 0, reactions: 0, popularity: 0 };
}
