
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(storageKey: string, filename: string, mimeType: string, size: number): Data
{
    return {
        id: generateId(),
        storageKey,
        filename,
        mimeType,
        size
    };
}
