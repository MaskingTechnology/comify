
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

export type CreateData = {
    readonly tenantId: TenantId;
    readonly creatorId: Identifier;
    readonly comicId?: Identifier;
    readonly commentId?: Identifier;
    readonly parentId?: Identifier;
};
