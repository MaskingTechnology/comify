
import ReactionData from './ReactionData';

export default async function retrieveData(id: string): Promise<ReactionData>
{
    return new ReactionData(id, '0', '0', undefined);
}
