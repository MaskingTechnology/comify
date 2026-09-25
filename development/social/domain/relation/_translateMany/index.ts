
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Record } from '../definitions';

import { type Mapping } from './definitions';
import translate from './translate';

export default async function (followerId: Identifier, mapping: Mapping, records: Record[]): Promise<Record[]>
{
    return Promise.all(records.map(record => translate(followerId, mapping, record)));
}
