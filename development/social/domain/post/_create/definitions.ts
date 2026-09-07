
import { type Identifier } from '@comify/common/primitives/identifier';

export type CreateData = {
    readonly creatorId: Identifier;
    readonly comicId?: Identifier;
    readonly commentId?: Identifier;
    readonly parentId?: Identifier;
};
