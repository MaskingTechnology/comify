
import type Requester from '^/domain/authentication/Requester';

import get from '../get/feature';
import { DataModel } from '../types';

export default async function feature(requester: Requester, data: DataModel[]): Promise<DataModel[]>
{
    return Promise.all(data.map(item => get(requester.id, item.followerId)));
}
