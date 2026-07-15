
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(message: string): Data
{
    return {
        id: generateId(),
        message
    };
}
