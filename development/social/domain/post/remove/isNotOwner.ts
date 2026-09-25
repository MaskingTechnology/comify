
import { type Record } from '../definitions';

export default function (record: Record, requesterId: string): boolean
{
    return record.creatorId !== requesterId;
}
