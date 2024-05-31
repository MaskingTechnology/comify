
import { Requester } from '^/domain/authentication/types';

import getById from '../getById/feature';
import type { DataModel } from '../types';

export default async function feature(requester: Requester): Promise<DataModel>
{
    return getById(requester.id);
}
