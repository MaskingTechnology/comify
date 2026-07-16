
import type { ImageData } from '~/image';

import type { BaseData } from '../definitions';

export type Data = BaseData &
{
    readonly imageId: string;
    readonly structure?: string;
};

export type Comic = Omit<Data, 'id' | 'imageId'> &
{
    readonly image: ImageData;
};

export const RECORD_TYPE = 'comic';
export const IMAGE_TYPE = 'comic';
