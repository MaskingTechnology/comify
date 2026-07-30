
import { type ImageData } from '~/image';
import { type Metrics } from '~/creator.metrics';

export type References = {
    readonly portraitMap: Map<string, ImageData>;
    readonly metricsMap: Map<string, Metrics>;
};
