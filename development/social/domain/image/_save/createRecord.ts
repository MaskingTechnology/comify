
import generateId from '@comify/common/primitives/identifier/generate';

import { type Record } from '../definitions';

export default function (storageKey: string, filename: string, mimeType: string, size: number): Record
{
    return {
        id: generateId(),
        storageKey,
        filename,
        mimeType,
        size
    };
}
