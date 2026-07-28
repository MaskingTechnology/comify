
import type { Validation } from '@theshelf/validation';

import type { BaseRecord } from '../definitions';

export type ImageData = {
    readonly dataUrl: string;
};

export type MetaData = {
    readonly filename: string;
    readonly mimeType: string;
    readonly size: number;
};

export type Record = BaseRecord & MetaData &
{
    readonly storageKey: string;
};

export type Image = MetaData &
{
    readonly buffer: Buffer;
};

export const RECORD_TYPE = 'image';

export const requiredStringValidation: Validation =
{
    message: 'Value is missing',
    STRING:
    {
        required: true
    }
};
