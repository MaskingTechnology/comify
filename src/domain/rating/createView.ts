
import retrieveCreatorData from '../creator/retrieveData';
import createCreatorView from '../creator/createView';

import type RatingData from './RatingData';
import RatingView from './RatingView';

export default async function createView(data: RatingData): Promise<RatingView>
{
    const creatorData = await retrieveCreatorData(data.creatorId);
    const creatorView = await createCreatorView(creatorData);

    return new RatingView(data.id, new Date(), creatorView);
}
