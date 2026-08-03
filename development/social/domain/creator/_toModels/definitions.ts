
import type { Identifier } from '@comify/common/primitives/identifier';

import { type ImageData } from '~/image';
import { type Metrics } from '~/creator.metrics';

export type References = {
    readonly portraitMap: Map<Identifier, ImageData>;
    readonly metricsMap: Map<Identifier, Metrics>;
};
