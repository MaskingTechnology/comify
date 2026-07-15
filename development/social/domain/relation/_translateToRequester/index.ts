
import type { Data } from '../definitions';

import type { Mapping } from './definitions';
import translate from './translate';

export default async function translateToRequester(requesterId: string, mapping: Mapping, data: Data[]): Promise<Data[]>
{
    return Promise.all(data.map(item => translate(requesterId, mapping, item)));
}
