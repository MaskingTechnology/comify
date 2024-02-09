
import type Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import type RatingView from './view/RatingView';
import createView from './view/createView';

export default async function retrieveView(id: string, requester?: Requester): Promise<RatingView>
{
    const data = await retrieve(id);

    return createView(data);
}
