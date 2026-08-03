
import type { Identifier } from '@comify/common/primitives/identifier';

import { type Post } from '~/post';
import { type Relation } from '~/relation';

export type References = {
    readonly postMap: Map<Identifier, Post>;
    readonly relationMap: Map<Identifier, Relation>;
};
