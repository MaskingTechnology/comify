
import type { Metrics, Record } from '../definitions';

export default async function run(record: Record): Promise<Metrics>
{
    return {
        posts: record.posts,
        followers: record.followers,
        following: record.following,
        popularity: record.popularity
    };
}
