
import { type Metrics, type Record } from '../definitions';

export default function (record: Record): Metrics
{
    return {
        posts: record.posts,
        followers: record.followers,
        following: record.following,
        popularity: record.popularity
    };
}
