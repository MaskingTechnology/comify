
import { type Requester } from '@comify/common/security';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import type { Relation } from '../definitions';
import translateToRequester from '../_translateToRequester';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function run(requester: Requester, followingId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const records = await retrieve(followingId, range.limit, range.offset);

    const translated = await translateToRequester(requester.principalId, 'follower', records);

    return Promise.all(translated.map(record => toModel(requester.tenantId, record)));
}
