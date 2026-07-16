
import type { Data, Comment } from '../definitions';

export default async function run(data: Data): Promise<Comment>
{
    const {id: $0, ...comment} = data;

    return comment;
}
