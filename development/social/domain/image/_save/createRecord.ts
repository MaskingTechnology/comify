
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../definitions';

export default function createRecord(storageKey: string, filename: string, mimeType: string, size: number): Record
{
    return {
        id: generateId(),
        storageKey,
        filename,
        mimeType,
        size
    };
}
