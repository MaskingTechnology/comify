
import retrieveCreatorView from '../creator/retrieveView';
import createCreatorView from '../creator/createView';

import type RatingData from './RatingData';
import RatingView from './RatingView';

export default async function createView(data: RatingData): Promise<RatingView>
{
    const creatorView = await retrieveCreatorView(data.creatorId);

    return new RatingView(data.id, new Date(), creatorView);
}
