
import { type Requester } from '@comify/common/security';

import { type RatingKey } from '../../definitions';

import create from '../create';
import remove from '../remove';

import publish from './publish';

export default async function (requester: Requester, key: RatingKey): Promise<void>
{
    await create(key);

    try
    {
        await publish(requester, key);
    }
    catch (error)
    {
        await remove(key);

        throw error;
    }
}
