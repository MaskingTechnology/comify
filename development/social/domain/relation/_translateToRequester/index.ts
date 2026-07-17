
import type { Record } from '../definitions';

import type { Mapping } from './definitions';
import translate from './translate';

export default async function translateToRequester(requesterId: string, mapping: Mapping, record: Record[]): Promise<Record[]>
{
    return Promise.all(record.map(item => translate(requesterId, mapping, item)));
}
