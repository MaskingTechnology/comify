
import type { Record, Comment } from '../definitions';

export default async function run(record: Record): Promise<Comment>
{
    const {id: $0, ...comment} = record;

    return comment;
}
