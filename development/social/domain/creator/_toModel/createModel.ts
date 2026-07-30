
import { type Record, type Creator } from '../definitions';

import { type References } from './definitions';

export default function (record: Record, references: References): Creator
{
    const { id, fullName, nickname, joinedAt } = record;

    const { portrait, metrics } = references;

    return { id, fullName, nickname, joinedAt, portrait, metrics };
}
