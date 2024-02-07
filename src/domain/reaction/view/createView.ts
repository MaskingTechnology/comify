
import getCreatorView from '../../creator/get';

import type ReactionData from '../data/ReactionData';
import ReactionView from './ReactionView';

export default async function createView(data: ReactionData): Promise<ReactionView>
{
    const creatorView = await getCreatorView(data.creatorId);

    return new ReactionView(data.id, new Date(), creatorView, data.ratingCount);
}
