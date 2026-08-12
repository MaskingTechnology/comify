
import type { Validation } from '@theshelf/validation';

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

export const messageValidation: Validation =
{
    message: 'Value is missing or too long',
    STRING: { maxLength: MESSAGE_MAX_LENGTH }
};
