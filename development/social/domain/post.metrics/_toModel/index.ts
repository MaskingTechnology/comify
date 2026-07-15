
import type { Data, Metrics } from '../definitions';

export default function run(data: Data): Metrics
{
    return {
        postId: data.postId,
        ratings: data.ratings,
        reactions: data.reactions,
        popularity: data.popularity
    }
}
