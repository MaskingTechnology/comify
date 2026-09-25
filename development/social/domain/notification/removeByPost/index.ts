
import { type Identifier } from '@comify/common/primitives/identifier';

import remove from './remove';
import retrieve from './retrieve';

export default async function (postId: Identifier): Promise<void>
{
    const records = await retrieve(postId);

    const ids = records.map(notification => notification.id);

    await remove(postId, ids);
}
