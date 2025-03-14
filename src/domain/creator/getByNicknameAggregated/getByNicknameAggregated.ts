
import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getByNickname from '../getByNickname';

export default async function getByNicknameAggregated(nickname: string): Promise<AggregatedData>
{
    const data = await getByNickname(nickname);

    return aggregate(data);
}
