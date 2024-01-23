
import retrieveCreatorData from '../creator/retrieveData';
import createCreatorView from '../creator/createView';

import ReactionData from './ReactionData';
import ReactionView from './ReactionView';

export default async function createView(data: ReactionData): Promise<ReactionView>
{
    const creatorData = await retrieveCreatorData(data.creatorId);
    const creatorView = await createCreatorView(creatorData);

    return new ReactionView(data.id, new Date(), creatorView, data.ratingCount);
}
