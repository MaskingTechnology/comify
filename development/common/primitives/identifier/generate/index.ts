
import { generateUUID } from '^/integrations/utilities/crypto';

import { type Identifier } from '../definitions';

export default function (): Identifier
{
    return generateUUID();
}
