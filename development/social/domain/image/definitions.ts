
import type { Validation } from '@theshelf/validation';

import type { BaseData } from '../definitions';

export type ImageData = {
    readonly dataUrl: string;
};

export type MetaData = {
    readonly filename: string;
    readonly mimeType: string;
    readonly size: number;
};

export type Data = BaseData & MetaData &
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
