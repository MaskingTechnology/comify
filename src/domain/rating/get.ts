
import type RatingView from './RatingView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function retrieveView(id: string): Promise<RatingView>
{
    const data = await retrieve(id);

    return createView(data);
}
