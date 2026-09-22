
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Type } from '../definitions';

import createRecord from './createRecord';
import persist from './persist';

export default async function (type: Type, senderId: Identifier, receiverId: Identifier, postId: Identifier | undefined = undefined): Promise<void>
{
    if (senderId === receiverId)
    {
        return;
    }

    const record = createRecord(type, senderId, receiverId, postId);

    await persist(record);
}
