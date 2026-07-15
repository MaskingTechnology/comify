
import type { Metrics, Data } from '../definitions';

export default function run(data: Data): Metrics
{
    return {
        posts: data.posts,
        followers: data.followers,
        following: data.following,
        popularity: data.popularity
    };
}
