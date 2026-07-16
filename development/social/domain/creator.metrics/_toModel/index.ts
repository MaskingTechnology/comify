
import type { Metrics, Data } from '../definitions';

export default async function run(data: Data): Promise<Metrics>
{
    return {
        posts: data.posts,
        followers: data.followers,
        following: data.following,
        popularity: data.popularity
    };
}
