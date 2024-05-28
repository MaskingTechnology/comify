
import aggregate, { AggregatedData } from '../aggregate/feature';
import getByNickname from '../getByNickname/feature';

export default async function feature(nickname: string): Promise<AggregatedData>
{
    const data = await getByNickname(nickname);

    return aggregate(data);
}
