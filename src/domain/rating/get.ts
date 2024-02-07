
import type Requester from '../authentication/Requester';

import type RatingView from './view/RatingView';
import createView from './view/createView';
import retrieve from './data/retrieve';

export default async function retrieveView(id: string, requester?: Requester): Promise<RatingView>
{
    const data = await retrieve(id);

    return createView(data);
}
