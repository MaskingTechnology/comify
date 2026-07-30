
import type { Comic } from '~/post.comic';
import type { Comment } from '~/post.comment';
import type { Metrics } from '~/post.metrics';
import type { Relation } from '~/relation';

export type References = {
    readonly relationMap: Map<string, Relation>;
    readonly isRatedMap: Map<string, boolean>;
    readonly comicMap: Map<string, Comic>;
    readonly commentMap: Map<string, Comment>;
    readonly metricsMap: Map<string, Metrics>;
};
