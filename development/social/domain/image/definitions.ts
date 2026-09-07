
import { type Validation } from '@theshelf/validation';

import { type BaseRecord } from '../definitions';

export type ImageDataUrl = string;

export type ImageData = {
    readonly dataUrl: ImageDataUrl;
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

const TEN_B = 10;
const FIVE_MB = 1024 * 1024 * 5;

export const filenameValidation: Validation =
{
    message: 'Value is not a valid file name',
    STRING: {}
};

export const mimeTypeValidation: Validation =
{
    message: 'Value is not a valid mime type',
    STRING: { pattern: 'image/(jpeg|png|gif)' }
};

export const sizeValidation: Validation =
{
    message: 'Value is not a valid size',
    NUMBER: { minValue: TEN_B, maxValue: FIVE_MB }
};

export const stringValidation: Validation =
{
    message: 'Value is missing',
    STRING: {}
};
