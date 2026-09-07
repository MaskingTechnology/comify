
import generateId from '@comify/common/primitives/identifier/generate';

import { type Record, type Message } from '../definitions';

export default function (message: Message): Record
{
    return {
        id: generateId(),
        message
    };
}
