
import type { BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly message: string;
};

export type Message = string;

export type Comment = {
    readonly message: Message;
};

export const RECORD_TYPE = 'post.comment';
export const MESSAGE_MAX_LENGTH = 2000;
