
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(imageId: string, structure: string | undefined = undefined): Data
{
    return {
        id: generateId(),
        imageId,
        structure
    };
}
