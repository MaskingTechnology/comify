
import { Requester } from '^/domain/authentication';

import { DataModel } from '../types';

import translate from './translate';
import { Mapping } from './types';

export default async function translateToRequester(requester: Requester, mapping: Mapping, data: DataModel[]): Promise<DataModel[]>
{
    return Promise.all(data.map(item => translate(requester, mapping, item)));
}
