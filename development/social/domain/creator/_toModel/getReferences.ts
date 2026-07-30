
import getPortrait from '~/image/getById';
import getMetrics from '~/creator.metrics/get';

import { type Record } from '../definitions';

import { type References } from './definitions';

export default async function (record: Record): Promise<References>
{
    const [portrait, metrics] = await Promise.all([
        record.portraitId !== undefined ? getPortrait(record.portraitId) : Promise.resolve(undefined),
        getMetrics(record.id)
    ]);

    return { portrait, metrics };
}
