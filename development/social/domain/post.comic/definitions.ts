
import type { ImageData } from '~/image';

import type { BaseRecord } from '../definitions';

export type Record = BaseRecord &
{
    readonly imageId: string;
    readonly structure?: string;
};

export type Comic = Omit<Record, 'id' | 'imageId'> &
{
    readonly image: ImageData;
};

export const RECORD_TYPE = 'post.comic';
export const IMAGE_TYPE = 'comic';
