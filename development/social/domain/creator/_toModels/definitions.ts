
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Metrics } from '~/creator.metrics';
import { type ImageData } from '~/image';

export type References = {
    readonly portraitMap: Map<Identifier, ImageData>;
    readonly metricsMap: Map<Identifier, Metrics>;
};
