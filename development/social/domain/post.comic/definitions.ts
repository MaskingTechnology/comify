
import type { ImageData } from '~/image';

import type { BaseData } from '../definitions';

export type Record = BaseData &
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
