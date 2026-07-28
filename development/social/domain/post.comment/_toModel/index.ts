
import type { Record, Comment } from '../definitions';

export default async function run(record: Record): Promise<Comment>
{
    return { message: record.message };
}
