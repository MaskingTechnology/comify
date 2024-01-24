
import retrieveCreatorView from '../creator/retrieveView';

import type ReactionData from './ReactionData';
import ReactionView from './ReactionView';

export default async function createView(data: ReactionData): Promise<ReactionView>
{
    const creatorView = await retrieveCreatorView(data.creatorId);

    return new ReactionView(data.id, new Date(), creatorView, data.ratingCount);
}
