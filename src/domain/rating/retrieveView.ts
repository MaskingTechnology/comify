
import type RatingView from './RatingView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<RatingView>
{
    const data = await retrieveData(id);

    return createView(data);
}
