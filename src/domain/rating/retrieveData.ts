
import RatingData from './RatingData';

export default async function retrieveData(id: string): Promise<RatingData>
{
    return new RatingData(id, '0', '0', undefined);
}
