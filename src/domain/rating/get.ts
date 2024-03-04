
import Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import type RatingView from './view/RatingView';
import createView from './view/createView';

export default async function get(requester: Requester, id: string): Promise<RatingView>
{
    const data = await retrieve(id);

    return createView(requester, data);
}
