
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../definitions';

export default function (message: string): Record
{
    return {
        id: generateId(),
        message
    };
}
