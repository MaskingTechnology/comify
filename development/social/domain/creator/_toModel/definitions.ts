
import { type Metrics } from '~/creator.metrics';
import { type ImageData } from '~/image';

export type References = {
    readonly portrait?: ImageData;
    readonly metrics: Metrics;
};
