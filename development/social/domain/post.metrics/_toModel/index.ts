
import { type Metrics, type Record } from '../definitions';

export default async function (record: Record): Promise<Metrics>
{
    return {
        ratings: record.ratings,
        reactions: record.reactions,
        popularity: record.popularity
    };
}
