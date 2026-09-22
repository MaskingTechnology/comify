
import { type Identifier } from '@comify/common/primitives/identifier';

import removeImage from '~/image/remove';

import retrieve from '../_retrieveById';

import erase from './erase';

export default async function (id: Identifier): Promise<void>
{
    const record = await retrieve(id);

    await erase(id);

    return removeImage(record.imageId);
}
