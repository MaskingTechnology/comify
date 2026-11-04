
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Reason, type Remark } from '../definitions';

export type CreateData = {
    readonly postId: Identifier;
    readonly reason: Reason;
    readonly remark?: Remark;
};
