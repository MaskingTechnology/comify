
import { type ImageData } from '~/image';
import { type Metrics } from '~/creator.metrics';

export type References = {
    readonly portrait?: ImageData;
    readonly metrics: Metrics;
};
