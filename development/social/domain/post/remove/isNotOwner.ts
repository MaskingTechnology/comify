
import type { Record } from '../definitions';

export default function isNotOwner(record: Record, requesterId: string): boolean
{
    return record.creatorId !== requesterId;
}
