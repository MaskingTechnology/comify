
import { type Post } from '~/post';
import { type Relation } from '~/relation';

export type References = {
    readonly postMap: Map<string, Post>;
    readonly relationMap: Map<string, Relation>;
};
