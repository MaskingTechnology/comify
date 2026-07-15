
import type { BaseData } from '../definitions';

export type Data = BaseData &
{
    readonly message: string;
};

export type Comment = Pick<Data, 'message'>;

export const RECORD_TYPE = 'comment';
export const MESSAGE_MAX_LENGTH = 2000;
