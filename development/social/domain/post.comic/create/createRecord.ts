
import { type Identifier } from '@comify/common/primitives/identifier';
import generateId from '@comify/common/primitives/identifier/generate';

import { type Record, type Structure } from '../definitions';

export default function (imageId: Identifier, structure: Structure | undefined = undefined): Record
{
    return {
        id: generateId(),
        imageId,
        structure
    };
}
