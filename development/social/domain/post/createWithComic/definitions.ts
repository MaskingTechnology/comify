
import { type Identifier } from '@comify/common/primitives/identifier';

import { type ImageDataUrl } from '~/image';

export type CreateData = {
    readonly imageDataUrl: ImageDataUrl;
    readonly parentId?: Identifier;
};
