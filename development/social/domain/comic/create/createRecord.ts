
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../definitions';

export default function createRecord(imageId: string, structure: string | undefined = undefined): Record
{
    return {
        id: generateId(),
        imageId,
        structure
    };
}
