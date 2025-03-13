
import type { Requester } from '^/domain/authentication';

import type { DataModel } from '../types';

import translate from './translate';
import type { Mapping } from './types';

export default async function translateToRequester(requester: Requester, mapping: Mapping, data: DataModel[]): Promise<DataModel[]>
{
    return Promise.all(data.map(item => translate(requester, mapping, item)));
}
