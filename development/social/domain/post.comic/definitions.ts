
import { type Validation } from '@theshelf/validation';

import { type ImageData } from '~/image';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly imageId: string;
    readonly structure?: string;
};

export type Structure = string;

export type Comic = {
    readonly image: ImageData;
    readonly structure?: Structure;
};

export const RECORD_TYPE = 'post.comic';
export const IMAGE_TYPE = 'comic';

export const dataUrlValidation: Validation =
{
    message: 'Value is not a string',
    STRING: {}
};

export const structureValidation: Validation =
{
    message: 'Value is not a string',
    STRING: {}
};
