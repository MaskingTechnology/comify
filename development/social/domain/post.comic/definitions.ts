
import type { ImageData } from '~/image';

import type { BaseRecord } from '../definitions';

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
