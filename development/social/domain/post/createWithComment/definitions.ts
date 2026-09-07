
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Message } from '~/post.comment';

export type CreateData = {
    readonly message: Message;
    readonly parentId?: Identifier;
};
