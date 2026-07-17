
import type { BaseData } from '../definitions';

export type Record = BaseData &
{
    readonly message: string;
};

export type Comment = Omit<Record, 'id'>;

export const RECORD_TYPE = 'comment';
export const MESSAGE_MAX_LENGTH = 2000;
