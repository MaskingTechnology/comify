
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel, Reason } from '../types';

export default function createData(postId: string, reason: Reason, remark: string | undefined = undefined): DataModel
{
    return {
        id: generateId(),
        postId,
        reason,
        reviewed: false,
        remark: remark
    };
}
