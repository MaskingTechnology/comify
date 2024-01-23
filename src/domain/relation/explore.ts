
import filterCreatorData from '../creator/filterData';
import createCreatorView from '../creator/createView';

import RelationView from './RelationView';

export default async function explore(): Promise<RelationView[]>
{
    const creatorData = await filterCreatorData([/* all related creator ids */]);
    const creatorViews = await Promise.all(creatorData.map(data => createCreatorView(data)));

    return Promise.all(creatorViews.map(creatorView => new RelationView(undefined, creatorView)));
}
