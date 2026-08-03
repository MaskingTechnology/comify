
import type { ImageDataUrl } from '~/image';

import type { Structure } from '../definitions';

export type CreateData = {
    readonly imageDataUrl: ImageDataUrl;
    readonly structure?: Structure;
};
