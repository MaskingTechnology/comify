
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Comic } from '~/post.comic';
import { type Comment } from '~/post.comment';
import { type Metrics } from '~/post.metrics';
import { type RatingId } from '~/post.rating';
import { type Relation, type RelationId } from '~/relation';

export type References = {
    readonly relationMap: Map<RelationId, Relation>;
    readonly isRatedMap: Map<RatingId, boolean>;
    readonly comicMap: Map<Identifier, Comic>;
    readonly commentMap: Map<Identifier, Comment>;
    readonly metricsMap: Map<Identifier, Metrics>;
};
